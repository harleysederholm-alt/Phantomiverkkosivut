"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

export default function QuantumMonolith() {
    const coreRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);
    const ringRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Violent, jittery rotation for the core
        if (coreRef.current) {
            coreRef.current.rotation.x = time * 0.5;
            coreRef.current.rotation.y = time * 0.3;
            // Pulsating scale (Heartbeat)
            const scale = 1 + Math.sin(time * 3) * 0.1 + (Math.random() * 0.02);
            coreRef.current.scale.set(scale, scale, scale);
        }

        // Slow, menacing rotation for the cage
        if (wireframeRef.current) {
            wireframeRef.current.rotation.x = -time * 0.2;
            wireframeRef.current.rotation.z = time * 0.1;
        }

        // Orbital Ring System
        if (ringRef.current) {
            ringRef.current.rotation.z += 0.01;
            ringRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
        }
    });

    return (
        <group scale={[1.2, 1.2, 1.2]}>
            <Float speed={5} rotationIntensity={0.5} floatIntensity={0.2}>
                {/* THE CORE: Molten Data */}
                <mesh ref={coreRef}>
                    <icosahedronGeometry args={[2, 4]} /> {/* High detail */}
                    <meshPhysicalMaterial
                        color="#000000"
                        emissive="#00FF41"
                        emissiveIntensity={2}
                        roughness={0.2}
                        metalness={1}
                        wireframe={true} // Wireframe core
                    />
                </mesh>

                {/* THE SHELL: Glass Containment */}
                <mesh>
                    <icosahedronGeometry args={[2.2, 2]} />
                    <meshPhysicalMaterial
                        color="#000000"
                        transmission={1}
                        thickness={2}
                        roughness={0}
                        ior={1.5}
                        clearcoat={1}
                    />
                </mesh>

                {/* THE CAGE: Outer Security Layer */}
                <mesh ref={wireframeRef} scale={[1.5, 1.5, 1.5]}>
                    <dodecahedronGeometry args={[2, 0]} />
                    <meshBasicMaterial
                        color="#00FF41"
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </mesh>
            </Float>

            {/* Volumetric Glow (Fake) */}
            <mesh scale={[6, 6, 6]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="#00FF41" transparent opacity={0.03} blending={THREE.AdditiveBlending} side={THREE.BackSide} />
            </mesh>
        </group>
    );
}
