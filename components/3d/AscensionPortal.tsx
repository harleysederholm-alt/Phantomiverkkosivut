"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AscensionPortal() {
    const portalRef = useRef<THREE.Group>(null);
    const vortexRef = useRef<THREE.Points>(null);
    const ringsRef = useRef<THREE.Mesh[]>([]);

    // Portal ring structure
    const rings = useMemo(() => {
        return Array.from({ length: 8 }, (_, i) => ({
            radius: 3 + i * 0.5,
            rotation: i * 0.2,
            speed: 0.5 + i * 0.1,
        }));
    }, []);

    // Vortex particles
    const vortexParticles = useMemo(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);
        const speeds = new Float32Array(count);
        const radii = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const radius = 1 + Math.random() * 6;
            const angle = Math.random() * Math.PI * 2;
            const z = (Math.random() - 0.5) * 30;

            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = Math.sin(angle) * radius;
            positions[i * 3 + 2] = z;

            speeds[i] = 0.5 + Math.random() * 2;
            radii[i] = radius;
        }

        return { positions, speeds, radii, count };
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Rotate entire portal
        if (portalRef.current) {
            portalRef.current.rotation.z = time * 0.1;
        }

        // Animate rings
        ringsRef.current.forEach((ring, i) => {
            if (ring) {
                ring.rotation.z = time * rings[i].speed;
                // Pulsing scale
                const scale = 1 + Math.sin(time * 2 + i * 0.5) * 0.05;
                ring.scale.set(scale, scale, 1);
            }
        });

        // Animate vortex particles
        if (vortexRef.current) {
            const positions = vortexRef.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < vortexParticles.count; i++) {
                // Spiral motion
                const angle = time * vortexParticles.speeds[i];
                const radius = vortexParticles.radii[i];

                positions[i * 3] = Math.cos(angle + i) * radius * (1 - Math.abs(positions[i * 3 + 2]) / 30);
                positions[i * 3 + 1] = Math.sin(angle + i) * radius * (1 - Math.abs(positions[i * 3 + 2]) / 30);

                // Pull toward center
                positions[i * 3 + 2] += vortexParticles.speeds[i] * 0.1;
                if (positions[i * 3 + 2] > 15) {
                    positions[i * 3 + 2] = -15;
                }
            }

            vortexRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <group ref={portalRef}>
            {/* Portal Rings */}
            {rings.map((ring, i) => (
                <mesh
                    key={i}
                    ref={(el) => { if (el) ringsRef.current[i] = el; }}
                >
                    <torusGeometry args={[ring.radius, 0.03, 16, 64]} />
                    <meshStandardMaterial
                        color={i % 2 === 0 ? "#00FF41" : "#00FFFF"}
                        emissive={i % 2 === 0 ? "#00FF41" : "#00FFFF"}
                        emissiveIntensity={2}
                        toneMapped={false}
                    />
                </mesh>
            ))}

            {/* Hexagonal Gate Structure */}
            <GateStructure />

            {/* Vortex Particles */}
            <points ref={vortexRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[vortexParticles.positions, 3]}
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

            {/* Central Light Beam */}
            <mesh position={[0, 0, 10]}>
                <cylinderGeometry args={[0.5, 2, 20, 32, 1, true]} />
                <meshBasicMaterial
                    color="#00FF41"
                    transparent
                    opacity={0.15}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Core Glow */}
            <mesh position={[0, 0, 5]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial
                    color="#FFFFFF"
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Outer Glow */}
            <mesh>
                <sphereGeometry args={[10, 32, 32]} />
                <meshBasicMaterial
                    color="#00FF41"
                    transparent
                    opacity={0.02}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Energy Tendrils */}
            <EnergyTendrils />
        </group>
    );
}

function GateStructure() {
    const structureRef = useRef<THREE.Group>(null);
    const pillarsRef = useRef<THREE.Mesh[]>([]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (structureRef.current) {
            structureRef.current.rotation.z = -time * 0.05;
        }

        pillarsRef.current.forEach((pillar, i) => {
            if (pillar) {
                const pulse = 1 + Math.sin(time * 3 + i) * 0.1;
                pillar.scale.y = pulse;
            }
        });
    });

    const pillars = useMemo(() => {
        return Array.from({ length: 6 }, (_, i) => {
            const angle = (i / 6) * Math.PI * 2;
            const radius = 7;
            return {
                position: [Math.cos(angle) * radius, Math.sin(angle) * radius, 0] as [number, number, number],
                rotation: angle + Math.PI / 2,
            };
        });
    }, []);

    return (
        <group ref={structureRef}>
            {pillars.map((pillar, i) => (
                <group key={i} position={pillar.position} rotation={[0, 0, pillar.rotation]}>
                    {/* Pillar */}
                    <mesh
                        ref={(el) => { if (el) pillarsRef.current[i] = el; }}
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <boxGeometry args={[0.3, 4, 0.3]} />
                        <meshStandardMaterial
                            color="#00FF41"
                            emissive="#00FF41"
                            emissiveIntensity={1}
                            toneMapped={false}
                        />
                    </mesh>

                    {/* Pillar Cap */}
                    <mesh position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <octahedronGeometry args={[0.3, 0]} />
                        <meshStandardMaterial
                            color="#00FFFF"
                            emissive="#00FFFF"
                            emissiveIntensity={2}
                            toneMapped={false}
                        />
                    </mesh>
                </group>
            ))}

            {/* Connecting beams */}
            {pillars.map((pillar, i) => {
                const nextI = (i + 1) % pillars.length;
                const midpoint = [
                    (pillar.position[0] + pillars[nextI].position[0]) / 2,
                    (pillar.position[1] + pillars[nextI].position[1]) / 2,
                    2,
                ] as [number, number, number];

                return (
                    <mesh key={`beam-${i}`} position={midpoint}>
                        <boxGeometry args={[3, 0.1, 0.1]} />
                        <meshBasicMaterial
                            color="#00FF41"
                            transparent
                            opacity={0.5}
                            blending={THREE.AdditiveBlending}
                        />
                    </mesh>
                );
            })}
        </group>
    );
}

function EnergyTendrils() {
    const tendrilsRef = useRef<THREE.LineSegments>(null);

    const geometry = useMemo(() => {
        const positions: number[] = [];
        const tendrilCount = 12;
        const segments = 30;

        for (let t = 0; t < tendrilCount; t++) {
            const baseAngle = (t / tendrilCount) * Math.PI * 2;

            for (let s = 0; s < segments - 1; s++) {
                const progress = s / segments;
                const nextProgress = (s + 1) / segments;

                const radius1 = 7 + progress * 8;
                const radius2 = 7 + nextProgress * 8;

                const z1 = progress * 15;
                const z2 = nextProgress * 15;

                const wobble1 = Math.sin(progress * 4) * 0.5;
                const wobble2 = Math.sin(nextProgress * 4) * 0.5;

                positions.push(
                    Math.cos(baseAngle + wobble1) * radius1,
                    Math.sin(baseAngle + wobble1) * radius1,
                    z1,
                    Math.cos(baseAngle + wobble2) * radius2,
                    Math.sin(baseAngle + wobble2) * radius2,
                    z2
                );
            }
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
        return geo;
    }, []);

    useFrame((state) => {
        if (tendrilsRef.current) {
            tendrilsRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <lineSegments ref={tendrilsRef} geometry={geometry}>
            <lineBasicMaterial
                color="#00FF41"
                transparent
                opacity={0.3}
                blending={THREE.AdditiveBlending}
            />
        </lineSegments>
    );
}
