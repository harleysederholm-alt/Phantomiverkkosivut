"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";
import CameraRig from "./CameraRig";
import QuantumMonolith from "./QuantumMonolith";
import HyperTunnel from "./HyperTunnel";
import StarField from "./StarField";
import ParticleLogo from "./ParticleLogo";
import DataRings from "./DataRings";
import HexGrid from "./HexGrid";
import DataPackets from "./DataPackets";
import NeuralNetwork from "./NeuralNetwork";
import CyberGlobe from "./CyberGlobe";
import AscensionPortal from "./AscensionPortal";

import { EffectComposer, Bloom, Vignette, Noise, ChromaticAberration } from "@react-three/postprocessing";
import { Vector2 } from "three";

export default function SceneContainer() {
    return (
        <div className="absolute inset-0 bg-black">
            <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0, 10], fov: 50 }}
                gl={{ powerPreference: "high-performance", alpha: false, antialias: false, stencil: false, depth: false }}
            >
                <color attach="background" args={["#000500"]} />
                <Suspense fallback={null}>
                    {/* Dark, Moody Lighting */}
                    <ambientLight intensity={0.1} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#00FF41" />
                    <pointLight position={[-10, -10, -10]} intensity={2} color="#00FF41" />
                    <pointLight position={[0, 0, -50]} intensity={3} color="#00FFFF" />
                    <pointLight position={[0, 0, -100]} intensity={2} color="#00FF41" />
                    <pointLight position={[0, 0, -150]} intensity={3} color="#00FFFF" />

                    <CameraRig />

                    {/* ═══════════════════════════════════════════════════════════
                        SCENE 1: THE AWAKENING (Hero Section)
                        - QuantumMonolith with orbiting DataRings
                        - Holographic shields and energy particles
                    ═══════════════════════════════════════════════════════════ */}
                    <group position={[0, 0, 0]}>
                        <QuantumMonolith />
                        <DataRings count={4} radius={4.5} />
                    </group>

                    {/* ═══════════════════════════════════════════════════════════
                        SCENE 2: THE BREACH (Features + Comparison)
                        - Enhanced HyperTunnel with HexGrid walls
                        - Flowing DataPackets through the tunnel
                    ═══════════════════════════════════════════════════════════ */}
                    <group position={[0, 0, -30]}>
                        <HyperTunnel />
                        <HexGrid />
                        <DataPackets count={60} speed={1.5} />
                    </group>

                    {/* ═══════════════════════════════════════════════════════════
                        SCENE 3: THE NETWORK (Tech + Security Sections)
                        - Enhanced StarField with NeuralNetwork connections
                        - Pulsing data spheres traveling between nodes
                    ═══════════════════════════════════════════════════════════ */}
                    <group position={[0, 0, -70]}>
                        <StarField />
                        <NeuralNetwork />
                    </group>

                    {/* ═══════════════════════════════════════════════════════════
                        SCENE 4: THE CORE (Node Guide + Developer API)
                        - ParticleLogo with morphing formations
                        - Code fragments and terminal planes
                    ═══════════════════════════════════════════════════════════ */}
                    <group position={[0, 0, -110]}>
                        <ParticleLogo />
                    </group>

                    {/* ═══════════════════════════════════════════════════════════
                        SCENE 5: THE VOID (Global Reach + Testimonials)
                        - CyberGlobe with city nodes and data arcs
                        - Orbiting satellites and data streams
                    ═══════════════════════════════════════════════════════════ */}
                    <group position={[0, 0, -150]}>
                        <CyberGlobe />
                    </group>

                    {/* ═══════════════════════════════════════════════════════════
                        SCENE 6: THE ASCENSION (Roadmap + Footer)
                        - AscensionPortal with spinning rings
                        - Particle vortex and energy tendrils
                    ═══════════════════════════════════════════════════════════ */}
                    <group position={[0, 0, -190]}>
                        <AscensionPortal />
                    </group>

                    {/* ═══════════════════════════════════════════════════════════
                        POST-PROCESSING: Cinematic Film Look
                    ═══════════════════════════════════════════════════════════ */}
                    <EffectComposer disableNormalPass>
                        {/* Toxic Green Bloom - Enhanced */}
                        <Bloom
                            luminanceThreshold={0.05}
                            mipmapBlur
                            intensity={2}
                            radius={0.9}
                        />

                        {/* Monitor Glitch / RGB Split - Subtle */}
                        <ChromaticAberration
                            offset={new Vector2(0.003, 0.003)}
                            radialModulation={false}
                            modulationOffset={0}
                        />

                        {/* Cinematic Film Grain */}
                        <Noise opacity={0.12} />

                        {/* Dark Vignette */}
                        <Vignette eskil={false} offset={0.1} darkness={1.3} />
                    </EffectComposer>

                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
