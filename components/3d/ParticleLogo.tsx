"use client";
import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';

export default function ParticleLogo() {
    const pointsRef = useRef<THREE.Points>(null);

    // Create a Ghost Shape from mathematical function (cardioid-ish)
    // or just a sphere that morphs. Let's do a sphere that looks like a "Node" with activity.
    const particlesCount = 2000;

    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            // Sphere distribution
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 2 + (Math.random() * 0.2);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * 0.1;
            // Breathing effect
            const scale = 1 + Math.sin(time * 2) * 0.05;
            pointsRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.2}>
                <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
                    <PointMaterial
                        transparent
                        color="#00FF41"
                        size={0.05}
                        sizeAttenuation={true}
                        depthWrite={false}
                        blending={THREE.AdditiveBlending}
                    />
                </Points>

                {/* Core Glow */}
                <mesh>
                    <sphereGeometry args={[1.8, 32, 32]} />
                    <meshBasicMaterial color="#00FFFF" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
                </mesh>
            </Float>
        </group>
    );
}
