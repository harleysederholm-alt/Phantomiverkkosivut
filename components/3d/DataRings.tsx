"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DataRingsProps {
    count?: number;
    radius?: number;
}

export default function DataRings({ count = 3, radius = 4 }: DataRingsProps) {
    const groupRef = useRef<THREE.Group>(null);
    const ringsRef = useRef<THREE.Mesh[]>([]);

    // Binary data characters for texture effect
    const binaryTexture = useMemo(() => {
        const canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 64;
        const ctx = canvas.getContext("2d")!;

        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 512, 64);
        ctx.fillStyle = "#00FF41";
        ctx.font = "14px monospace";

        // Generate binary stream
        let binary = "";
        for (let i = 0; i < 100; i++) {
            binary += Math.random() > 0.5 ? "1" : "0";
        }
        ctx.fillText(binary, 0, 40);

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.repeat.x = 8;
        return texture;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.1;
        }

        ringsRef.current.forEach((ring, i) => {
            if (ring) {
                // Each ring rotates at different speed and axis
                ring.rotation.x = time * (0.3 + i * 0.1);
                ring.rotation.z = time * (0.2 - i * 0.05);

                // Pulsing scale
                const scale = 1 + Math.sin(time * 2 + i) * 0.05;
                ring.scale.set(scale, scale, scale);
            }
        });
    });

    const rings = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            radius: radius + i * 0.8,
            tubeRadius: 0.02 + Math.random() * 0.03,
            tiltX: (Math.random() - 0.5) * Math.PI * 0.5,
            tiltZ: (Math.random() - 0.5) * Math.PI * 0.3,
        }));
    }, [count, radius]);

    return (
        <group ref={groupRef}>
            {rings.map((ring, i) => (
                <mesh
                    key={i}
                    ref={(el) => { if (el) ringsRef.current[i] = el; }}
                    rotation={[ring.tiltX, 0, ring.tiltZ]}
                >
                    <torusGeometry args={[ring.radius, ring.tubeRadius, 16, 128]} />
                    <meshStandardMaterial
                        color="#00FF41"
                        emissive="#00FF41"
                        emissiveIntensity={2}
                        transparent
                        opacity={0.8}
                        map={binaryTexture}
                        toneMapped={false}
                    />
                </mesh>
            ))}

            {/* Holographic Shield Barriers */}
            {[0, 1, 2].map((i) => (
                <mesh key={`shield-${i}`} rotation={[0, (i * Math.PI * 2) / 3, Math.PI / 6]}>
                    <ringGeometry args={[radius - 0.5, radius + 2, 6, 1]} />
                    <meshBasicMaterial
                        color="#00FFFF"
                        transparent
                        opacity={0.08}
                        side={THREE.DoubleSide}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
            ))}

            {/* Energy Particles orbiting */}
            <OrbitingParticles radius={radius + 1.5} />
        </group>
    );
}

function OrbitingParticles({ radius }: { radius: number }) {
    const particlesRef = useRef<THREE.Points>(null);
    const count = 200;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const r = radius + (Math.random() - 0.5) * 0.5;
            const height = (Math.random() - 0.5) * 2;

            pos[i * 3] = Math.cos(angle) * r;
            pos[i * 3 + 1] = height;
            pos[i * 3 + 2] = Math.sin(angle) * r;
        }
        return pos;
    }, [radius]);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#00FFFF"
                size={0.08}
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
                sizeAttenuation
            />
        </points>
    );
}
