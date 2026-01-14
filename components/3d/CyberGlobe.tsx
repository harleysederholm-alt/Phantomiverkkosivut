"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CyberGlobe() {
    const globeRef = useRef<THREE.Group>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);
    const arcsRef = useRef<THREE.LineSegments>(null);
    const satellitesRef = useRef<THREE.InstancedMesh>(null);

    // Generate connection arcs between continents
    const { arcs, arcPositions } = useMemo(() => {
        const arcData: { start: THREE.Vector3; end: THREE.Vector3; height: number }[] = [];

        // Major city-like coordinates (lat/lng to 3D)
        const cities = [
            { lat: 60.17, lng: 24.94 }, // Helsinki
            { lat: 51.51, lng: -0.12 }, // London
            { lat: 40.71, lng: -74.01 }, // New York
            { lat: 35.68, lng: 139.69 }, // Tokyo
            { lat: -33.87, lng: 151.21 }, // Sydney
            { lat: 55.75, lng: 37.62 }, // Moscow
            { lat: 1.35, lng: 103.82 }, // Singapore
            { lat: 52.52, lng: 13.40 }, // Berlin
            { lat: 48.86, lng: 2.35 }, // Paris
            { lat: 37.77, lng: -122.42 }, // San Francisco
        ];

        const radius = 5;

        // Convert lat/lng to 3D position
        const toPosition = (lat: number, lng: number): THREE.Vector3 => {
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lng + 180) * (Math.PI / 180);
            return new THREE.Vector3(
                -radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.cos(phi),
                radius * Math.sin(phi) * Math.sin(theta)
            );
        };

        // Create arcs between random city pairs
        const positions: number[] = [];
        for (let i = 0; i < cities.length; i++) {
            for (let j = i + 1; j < cities.length; j++) {
                if (Math.random() > 0.6) {
                    const start = toPosition(cities[i].lat, cities[i].lng);
                    const end = toPosition(cities[j].lat, cities[j].lng);
                    const height = 1.5 + Math.random();
                    arcData.push({ start, end, height });

                    // Generate arc curve points
                    const segments = 20;
                    for (let t = 0; t < segments; t++) {
                        const t1 = t / segments;
                        const t2 = (t + 1) / segments;

                        const p1 = new THREE.Vector3().lerpVectors(start, end, t1);
                        const p2 = new THREE.Vector3().lerpVectors(start, end, t2);

                        // Add height curve
                        const curve1 = Math.sin(t1 * Math.PI) * height;
                        const curve2 = Math.sin(t2 * Math.PI) * height;
                        p1.multiplyScalar(1 + curve1 / radius);
                        p2.multiplyScalar(1 + curve2 / radius);

                        positions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
                    }
                }
            }
        }

        return { arcs: arcData, arcPositions: new Float32Array(positions) };
    }, []);

    // Satellites
    const satellites = useMemo(() => {
        return Array.from({ length: 20 }, () => ({
            orbit: 6 + Math.random() * 2,
            speed: 0.2 + Math.random() * 0.3,
            phase: Math.random() * Math.PI * 2,
            tilt: (Math.random() - 0.5) * Math.PI * 0.3,
        }));
    }, []);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Rotate globe
        if (globeRef.current) {
            globeRef.current.rotation.y = time * 0.1;
        }

        // Pulse wireframe
        if (wireframeRef.current && wireframeRef.current.material instanceof THREE.MeshBasicMaterial) {
            wireframeRef.current.material.opacity = 0.15 + Math.sin(time) * 0.05;
        }

        // Update satellites
        if (satellitesRef.current) {
            satellites.forEach((sat, i) => {
                const angle = time * sat.speed + sat.phase;
                dummy.position.set(
                    Math.cos(angle) * sat.orbit,
                    Math.sin(sat.tilt) * Math.sin(angle) * 2,
                    Math.sin(angle) * sat.orbit
                );
                dummy.scale.setScalar(0.1);
                dummy.lookAt(0, 0, 0);
                dummy.updateMatrix();
                satellitesRef.current!.setMatrixAt(i, dummy.matrix);
            });
            satellitesRef.current.instanceMatrix.needsUpdate = true;
        }
    });

    const arcGeometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(arcPositions, 3));
        return geo;
    }, [arcPositions]);

    return (
        <group ref={globeRef}>
            {/* Core Globe */}
            <mesh>
                <sphereGeometry args={[4.9, 64, 64]} />
                <meshBasicMaterial
                    color="#001100"
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Wireframe Grid */}
            <mesh ref={wireframeRef}>
                <sphereGeometry args={[5, 48, 24]} />
                <meshBasicMaterial
                    color="#00FF41"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>

            {/* Outer glow ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[5.5, 6.5, 64]} />
                <meshBasicMaterial
                    color="#00FFFF"
                    transparent
                    opacity={0.1}
                    blending={THREE.AdditiveBlending}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Connection Arcs */}
            <lineSegments ref={arcsRef} geometry={arcGeometry}>
                <lineBasicMaterial
                    color="#00FFFF"
                    transparent
                    opacity={0.8}
                    blending={THREE.AdditiveBlending}
                />
            </lineSegments>

            {/* Satellites */}
            <instancedMesh ref={satellitesRef} args={[undefined, undefined, satellites.length]}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#00FF41"
                    emissive="#00FF41"
                    emissiveIntensity={2}
                    toneMapped={false}
                />
            </instancedMesh>

            {/* City Nodes */}
            <CityNodes />

            {/* Data Streams */}
            <DataStreams arcs={arcs} />

            {/* Atmospheric Glow */}
            <mesh>
                <sphereGeometry args={[7, 32, 32]} />
                <meshBasicMaterial
                    color="#00FF41"
                    transparent
                    opacity={0.03}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
        </group>
    );
}

function CityNodes() {
    const nodesRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const cities = useMemo(() => {
        const coords = [
            { lat: 60.17, lng: 24.94 },
            { lat: 51.51, lng: -0.12 },
            { lat: 40.71, lng: -74.01 },
            { lat: 35.68, lng: 139.69 },
            { lat: -33.87, lng: 151.21 },
            { lat: 55.75, lng: 37.62 },
            { lat: 1.35, lng: 103.82 },
            { lat: 52.52, lng: 13.40 },
            { lat: 48.86, lng: 2.35 },
            { lat: 37.77, lng: -122.42 },
        ];

        const radius = 5.1;
        return coords.map(({ lat, lng }) => {
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lng + 180) * (Math.PI / 180);
            return new THREE.Vector3(
                -radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.cos(phi),
                radius * Math.sin(phi) * Math.sin(theta)
            );
        });
    }, []);

    useFrame((state) => {
        if (!nodesRef.current) return;
        const time = state.clock.getElapsedTime();

        cities.forEach((pos, i) => {
            dummy.position.copy(pos);
            const scale = 0.08 + Math.sin(time * 3 + i) * 0.02;
            dummy.scale.setScalar(scale);
            dummy.updateMatrix();
            nodesRef.current!.setMatrixAt(i, dummy.matrix);
        });
        nodesRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={nodesRef} args={[undefined, undefined, 10]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial
                color="#FFFFFF"
                transparent
                blending={THREE.AdditiveBlending}
            />
        </instancedMesh>
    );
}

function DataStreams({ arcs }: { arcs: { start: THREE.Vector3; end: THREE.Vector3 }[] }) {
    const streamsRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const streamData = useMemo(() => {
        return arcs.map(() => ({
            progress: Math.random(),
            speed: 0.5 + Math.random() * 0.5,
        }));
    }, [arcs]);

    useFrame(() => {
        if (!streamsRef.current) return;

        arcs.forEach((arc, i) => {
            const stream = streamData[i];
            stream.progress += stream.speed * 0.01;
            if (stream.progress > 1) stream.progress = 0;

            const pos = new THREE.Vector3().lerpVectors(arc.start, arc.end, stream.progress);
            const height = Math.sin(stream.progress * Math.PI) * 1.5;
            pos.multiplyScalar(1 + height / 5);

            dummy.position.copy(pos);
            dummy.scale.setScalar(0.05);
            dummy.updateMatrix();
            streamsRef.current!.setMatrixAt(i, dummy.matrix);
        });
        streamsRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={streamsRef} args={[undefined, undefined, arcs.length]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial
                color="#00FFFF"
                transparent
                opacity={0.9}
                blending={THREE.AdditiveBlending}
            />
        </instancedMesh>
    );
}
