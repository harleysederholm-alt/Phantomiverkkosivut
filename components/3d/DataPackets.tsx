"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DataPacketsProps {
    count?: number;
    speed?: number;
}

export default function DataPackets({ count = 50, speed = 2 }: DataPacketsProps) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const glowMeshRef = useRef<THREE.InstancedMesh>(null);

    // Generate data packet positions
    const packets = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 5 + Math.random() * 15;
            const z = Math.random() * 200 - 100;
            const packetSpeed = speed * (0.5 + Math.random());
            const size = 0.3 + Math.random() * 0.5;
            const colorType = Math.floor(Math.random() * 3); // 0: green, 1: cyan, 2: amber

            temp.push({
                angle,
                radius,
                z,
                speed: packetSpeed,
                size,
                colorType,
                rotationSpeed: Math.random() * 2,
            });
        }
        return temp;
    }, [count, speed]);

    const dummy = useMemo(() => new THREE.Object3D(), []);
    const colorArray = useMemo(() => {
        const colors = new Float32Array(count * 3);
        const palette = [
            new THREE.Color("#00FF41"), // Green
            new THREE.Color("#00FFFF"), // Cyan
            new THREE.Color("#FFAA00"), // Amber
        ];

        packets.forEach((p, i) => {
            const color = palette[p.colorType];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        });
        return colors;
    }, [packets, count]);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        packets.forEach((packet, i) => {
            // Move through tunnel
            packet.z += packet.speed;
            if (packet.z > 100) packet.z = -100;

            // Spiral motion along the tunnel
            const spiralAngle = packet.angle + time * 0.1;
            const x = Math.cos(spiralAngle) * packet.radius;
            const y = Math.sin(spiralAngle) * packet.radius;

            dummy.position.set(x, y, packet.z);
            dummy.rotation.x = time * packet.rotationSpeed;
            dummy.rotation.y = time * packet.rotationSpeed * 0.7;
            dummy.scale.setScalar(packet.size);

            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);

            // Glow mesh follows
            if (glowMeshRef.current) {
                dummy.scale.setScalar(packet.size * 2);
                dummy.updateMatrix();
                glowMeshRef.current.setMatrixAt(i, dummy.matrix);
            }
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
        if (glowMeshRef.current) {
            glowMeshRef.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <group>
            {/* Core Data Cubes */}
            <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    color="#00FF41"
                    emissive="#00FF41"
                    emissiveIntensity={3}
                    toneMapped={false}
                >
                    <instancedBufferAttribute
                        attach="instanceColor"
                        args={[colorArray, 3]}
                    />
                </meshStandardMaterial>
            </instancedMesh>

            {/* Glow Effect */}
            <instancedMesh ref={glowMeshRef} args={[undefined, undefined, count]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial
                    color="#00FF41"
                    transparent
                    opacity={0.2}
                    blending={THREE.AdditiveBlending}
                />
            </instancedMesh>

            {/* Trail Lines */}
            <DataTrails packets={packets} />
        </group>
    );
}

function DataTrails({ packets }: { packets: { z: number; angle: number; radius: number }[] }) {
    const linesRef = useRef<THREE.LineSegments>(null);

    const geometry = useMemo(() => {
        const positions = new Float32Array(packets.length * 6); // 2 points per line
        return new THREE.BufferGeometry().setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );
    }, [packets.length]);

    useFrame((state) => {
        if (!linesRef.current) return;
        const positions = geometry.attributes.position.array as Float32Array;
        const time = state.clock.getElapsedTime();

        packets.forEach((packet, i) => {
            const spiralAngle = packet.angle + time * 0.1;
            const x = Math.cos(spiralAngle) * packet.radius;
            const y = Math.sin(spiralAngle) * packet.radius;

            // Start point
            positions[i * 6] = x;
            positions[i * 6 + 1] = y;
            positions[i * 6 + 2] = packet.z;

            // End point (trailing behind)
            positions[i * 6 + 3] = x;
            positions[i * 6 + 4] = y;
            positions[i * 6 + 5] = packet.z - 3;
        });

        geometry.attributes.position.needsUpdate = true;
    });

    return (
        <lineSegments ref={linesRef} geometry={geometry}>
            <lineBasicMaterial
                color="#00FFFF"
                transparent
                opacity={0.5}
                blending={THREE.AdditiveBlending}
            />
        </lineSegments>
    );
}
