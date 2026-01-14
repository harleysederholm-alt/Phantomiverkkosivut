"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HexGrid() {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const edgesRef = useRef<THREE.LineSegments>(null);

    // Generate hexagonal grid positions for a tunnel
    const hexagons = useMemo(() => {
        const temp: { x: number; y: number; z: number; scale: number }[] = [];
        const tunnelLength = 150;
        const tunnelRadius = 25;
        const hexSize = 2;
        const rows = 20;

        for (let z = 0; z < tunnelLength; z += 8) {
            for (let i = 0; i < rows; i++) {
                const angle = (i / rows) * Math.PI * 2;
                const x = Math.cos(angle) * tunnelRadius;
                const y = Math.sin(angle) * tunnelRadius;

                temp.push({
                    x,
                    y,
                    z: z - tunnelLength / 2,
                    scale: hexSize + Math.random() * 0.5,
                });
            }
        }
        return temp;
    }, []);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        hexagons.forEach((hex, i) => {
            dummy.position.set(hex.x, hex.y, hex.z);

            // Face outward from tunnel center
            dummy.lookAt(0, 0, hex.z);

            // Pulsing glow effect
            const pulse = 0.8 + Math.sin(time * 2 + hex.z * 0.1) * 0.2;
            dummy.scale.set(hex.scale * pulse, hex.scale * pulse, 0.05);

            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    // Hexagon shape geometry
    const hexShape = useMemo(() => {
        const shape = new THREE.Shape();
        const sides = 6;
        for (let i = 0; i < sides; i++) {
            const angle = (i / sides) * Math.PI * 2 - Math.PI / 6;
            const x = Math.cos(angle);
            const y = Math.sin(angle);
            if (i === 0) shape.moveTo(x, y);
            else shape.lineTo(x, y);
        }
        shape.closePath();
        return shape;
    }, []);

    return (
        <group>
            {/* Hexagonal Grid Cells */}
            <instancedMesh ref={meshRef} args={[undefined, undefined, hexagons.length]}>
                <shapeGeometry args={[hexShape]} />
                <meshBasicMaterial
                    color="#00FF41"
                    transparent
                    opacity={0.15}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </instancedMesh>

            {/* Glowing edge lines */}
            <HexEdges hexagons={hexagons} />

            {/* Ambient Tunnel Glow */}
            <mesh>
                <cylinderGeometry args={[26, 26, 150, 32, 1, true]} />
                <meshBasicMaterial
                    color="#00FF41"
                    transparent
                    opacity={0.02}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </group>
    );
}

function HexEdges({ hexagons }: { hexagons: { x: number; y: number; z: number; scale: number }[] }) {
    const linesRef = useRef<THREE.LineSegments>(null);

    const geometry = useMemo(() => {
        const positions: number[] = [];
        const tunnelRadius = 25;

        // Create vertical and horizontal connecting lines
        for (let z = -75; z < 75; z += 15) {
            for (let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2;
                const x = Math.cos(angle) * tunnelRadius;
                const y = Math.sin(angle) * tunnelRadius;

                // Vertical line
                positions.push(x, y, z, x, y, z + 15);

                // Horizontal line
                const nextAngle = ((i + 1) / 12) * Math.PI * 2;
                const nx = Math.cos(nextAngle) * tunnelRadius;
                const ny = Math.sin(nextAngle) * tunnelRadius;
                positions.push(x, y, z, nx, ny, z);
            }
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
        return geo;
    }, []);

    useFrame((state) => {
        if (linesRef.current && linesRef.current.material instanceof THREE.LineBasicMaterial) {
            // Pulse opacity
            const time = state.clock.getElapsedTime();
            linesRef.current.material.opacity = 0.3 + Math.sin(time) * 0.1;
        }
    });

    return (
        <lineSegments ref={linesRef} geometry={geometry}>
            <lineBasicMaterial
                color="#00FFFF"
                transparent
                opacity={0.3}
                blending={THREE.AdditiveBlending}
            />
        </lineSegments>
    );
}
