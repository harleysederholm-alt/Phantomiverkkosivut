"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HyperTunnel() {
    const count = 1000;
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const lightRef = useRef<THREE.Group>(null);

    // Generate particles in a long tunnel shape
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 10 + Math.random() * 20; // Wide tunnel
            const z = Math.random() * 200 - 100; // Long depth

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            temp.push({ x, y, z, speed: Math.random() * 0.5 + 0.5 });
        }
        return temp;
    }, []);

    const dummy = new THREE.Object3D();

    useFrame((state) => {
        if (!meshRef.current) return;

        particles.forEach((particle, i) => {
            // Move particles towards camera to simulate speed
            particle.z += particle.speed * 2;
            if (particle.z > 50) particle.z = -150; // Reset loop

            dummy.position.set(particle.x, particle.y, particle.z);

            // Streak effect: scale Z based on speed
            dummy.scale.z = 20;
            dummy.scale.x = 0.1;
            dummy.scale.y = 0.1;

            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <group>
            {/* The Warp Field */}
            <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial
                    color="#00FF41"
                    transparent
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                />
            </instancedMesh>
        </group>
    );
}
