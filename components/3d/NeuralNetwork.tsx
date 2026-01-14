"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralNetwork() {
    const groupRef = useRef<THREE.Group>(null);
    const linesRef = useRef<THREE.LineSegments>(null);
    const nodesRef = useRef<THREE.InstancedMesh>(null);

    // Generate neural network nodes
    const { nodes, connections } = useMemo(() => {
        const nodeCount = 80;
        const nodeData: { position: THREE.Vector3; layer: number }[] = [];
        const connectionData: { start: number; end: number }[] = [];

        // Create layered structure
        const layers = 5;
        const nodesPerLayer = nodeCount / layers;

        for (let layer = 0; layer < layers; layer++) {
            for (let i = 0; i < nodesPerLayer; i++) {
                const angle = (i / nodesPerLayer) * Math.PI * 2 + layer * 0.5;
                const radius = 8 + layer * 3;
                const height = (layer - layers / 2) * 4;

                nodeData.push({
                    position: new THREE.Vector3(
                        Math.cos(angle) * radius + (Math.random() - 0.5) * 2,
                        height + (Math.random() - 0.5) * 2,
                        Math.sin(angle) * radius + (Math.random() - 0.5) * 2
                    ),
                    layer,
                });
            }
        }

        // Create connections between adjacent layers
        for (let i = 0; i < nodeData.length; i++) {
            const node = nodeData[i];
            // Connect to ~3 random nodes in adjacent layer
            for (let j = 0; j < nodeData.length; j++) {
                if (Math.abs(nodeData[j].layer - node.layer) === 1 && Math.random() > 0.7) {
                    connectionData.push({ start: i, end: j });
                }
            }
        }

        return { nodes: nodeData, connections: connectionData };
    }, []);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Animated pulse data for connections
    const pulseData = useMemo(() => {
        return connections.map(() => ({
            progress: Math.random(),
            speed: 0.3 + Math.random() * 0.5,
            active: Math.random() > 0.5,
        }));
    }, [connections]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.05;
        }

        // Update nodes
        if (nodesRef.current) {
            nodes.forEach((node, i) => {
                dummy.position.copy(node.position);

                // Pulsing scale based on activity
                const activity = Math.sin(time * 2 + i * 0.5) * 0.5 + 0.5;
                const scale = 0.15 + activity * 0.1;
                dummy.scale.setScalar(scale);

                dummy.updateMatrix();
                nodesRef.current!.setMatrixAt(i, dummy.matrix);
            });
            nodesRef.current.instanceMatrix.needsUpdate = true;
        }

        // Update pulse data
        pulseData.forEach((pulse) => {
            if (pulse.active) {
                pulse.progress += pulse.speed * 0.02;
                if (pulse.progress > 1) {
                    pulse.progress = 0;
                    pulse.active = Math.random() > 0.3;
                }
            } else if (Math.random() > 0.995) {
                pulse.active = true;
            }
        });
    });

    // Connection lines geometry
    const linesGeometry = useMemo(() => {
        const positions = new Float32Array(connections.length * 6);
        const colors = new Float32Array(connections.length * 6);

        connections.forEach((conn, i) => {
            const start = nodes[conn.start].position;
            const end = nodes[conn.end].position;

            positions[i * 6] = start.x;
            positions[i * 6 + 1] = start.y;
            positions[i * 6 + 2] = start.z;
            positions[i * 6 + 3] = end.x;
            positions[i * 6 + 4] = end.y;
            positions[i * 6 + 5] = end.z;

            // Green color
            colors[i * 6] = 0;
            colors[i * 6 + 1] = 1;
            colors[i * 6 + 2] = 0.25;
            colors[i * 6 + 3] = 0;
            colors[i * 6 + 4] = 1;
            colors[i * 6 + 5] = 0.25;
        });

        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        return geo;
    }, [nodes, connections]);

    return (
        <group ref={groupRef}>
            {/* Neural Nodes */}
            <instancedMesh ref={nodesRef} args={[undefined, undefined, nodes.length]}>
                <icosahedronGeometry args={[1, 2]} />
                <meshStandardMaterial
                    color="#00FFFF"
                    emissive="#00FFFF"
                    emissiveIntensity={3}
                    toneMapped={false}
                />
            </instancedMesh>

            {/* Connection Lines */}
            <lineSegments ref={linesRef} geometry={linesGeometry}>
                <lineBasicMaterial
                    color="#00FF41"
                    transparent
                    opacity={0.4}
                    blending={THREE.AdditiveBlending}
                    vertexColors
                />
            </lineSegments>

            {/* Pulsing Data Spheres */}
            <DataPulses nodes={nodes} connections={connections} pulseData={pulseData} />

            {/* Ambient Glow */}
            <mesh>
                <sphereGeometry args={[20, 32, 32]} />
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

function DataPulses({
    nodes,
    connections,
    pulseData
}: {
    nodes: { position: THREE.Vector3 }[];
    connections: { start: number; end: number }[];
    pulseData: { progress: number; active: boolean }[];
}) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame(() => {
        if (!meshRef.current) return;

        connections.forEach((conn, i) => {
            const pulse = pulseData[i];
            if (!pulse.active) {
                dummy.scale.setScalar(0);
            } else {
                const start = nodes[conn.start].position;
                const end = nodes[conn.end].position;

                // Interpolate position along connection
                dummy.position.lerpVectors(start, end, pulse.progress);
                dummy.scale.setScalar(0.1);
            }

            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, connections.length]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial
                color="#FFFFFF"
                transparent
                opacity={0.9}
                blending={THREE.AdditiveBlending}
            />
        </instancedMesh>
    );
}
