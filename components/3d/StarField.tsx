"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";
import * as THREE from "three";

export default function StarField() {
    const count = 150;
    const groupRef = useRef<THREE.Group>(null);

    const nodes = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 30;
            const z = (Math.random() - 0.5) * 20;
            const scale = Math.random() * 0.5 + 0.2;
            temp.push({ position: [x, y, z], scale });
        }
        return temp;
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.02; // Slow constellation rotation
            groupRef.current.rotation.z += delta * 0.005;
        }
    });

    return (
        <group ref={groupRef}>
            <Instances range={count}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial
                    color="#00FFFF"
                    emissive="#00FFFF"
                    emissiveIntensity={2}
                    toneMapped={false}
                />

                {nodes.map((node, i) => (
                    <Instance
                        key={i}
                        position={node.position as [number, number, number]}
                        scale={[node.scale, node.scale, node.scale]}
                    />
                ))}
            </Instances>

            {/* Connecting Lines (Simulated Constellation) */}
            {/* Note: Ideally we'd calculate lines dynamically, but for static constellations lines could be hardcoded or generated. 
                 For now, we let the 'bokeh' do the work of connecting visually. */}
        </group>
    );
}
