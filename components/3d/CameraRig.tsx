"use client";

import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CameraRig() {
    const { camera } = useThree();

    useLayoutEffect(() => {
        // Context for cleanup
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 2.5, // Smooth cinematic scrub
                },
            });

            // ═══════════════════════════════════════════════════════════
            // SCENE 1: THE AWAKENING (Hero)
            // Camera starts at z:10, zooms into the QuantumMonolith
            // ═══════════════════════════════════════════════════════════
            tl.to(camera.position, {
                z: -5,
                duration: 1,
                ease: "power2.inOut",
            });

            // ═══════════════════════════════════════════════════════════
            // SCENE 2: THE BREACH (Features + Comparison)
            // Fly through the HyperTunnel with hexagonal walls
            // ═══════════════════════════════════════════════════════════
            tl.to(camera.position, {
                z: -35,
                duration: 2,
                ease: "none", // Linear movement through tunnel
            });

            // Slight camera rotation for immersion
            tl.to(camera.rotation, {
                z: 0.05,
                duration: 0.5,
                ease: "power2.inOut",
            }, "<");

            // Exit tunnel effect
            tl.to(camera.position, {
                z: -50,
                duration: 1,
                ease: "power2.out",
            });

            tl.to(camera.rotation, {
                z: 0,
                duration: 0.5,
                ease: "power2.out",
            }, "<");

            // ═══════════════════════════════════════════════════════════
            // SCENE 3: THE NETWORK (Tech + Security)
            // Rise up slightly while approaching the neural network
            // ═══════════════════════════════════════════════════════════
            tl.to(camera.position, {
                y: 3,
                z: -75,
                duration: 1.5,
                ease: "power2.inOut",
            });

            // Subtle look-around effect
            tl.to(camera.rotation, {
                x: -0.05,
                duration: 0.5,
            }, "<0.5");

            // ═══════════════════════════════════════════════════════════
            // SCENE 4: THE CORE (Node Guide + API)
            // Descend into the particle core
            // ═══════════════════════════════════════════════════════════
            tl.to(camera.position, {
                y: 0,
                z: -100,
                duration: 1.5,
                ease: "power2.inOut",
            });

            tl.to(camera.rotation, {
                x: 0,
                duration: 0.5,
            }, "<");

            // Push deeper into the core
            tl.to(camera.position, {
                z: -115,
                duration: 1,
                ease: "power3.in",
            });

            // ═══════════════════════════════════════════════════════════
            // SCENE 5: THE VOID (Global + Testimonials + Changelog)
            // Approach the CyberGlobe from above
            // ═══════════════════════════════════════════════════════════
            tl.to(camera.position, {
                y: 5,
                z: -140,
                duration: 1.5,
                ease: "power2.inOut",
            });

            // Orbit-like rotation
            tl.to(camera.rotation, {
                x: -0.1,
                duration: 1,
            }, "<");

            // Close in on the globe
            tl.to(camera.position, {
                y: 2,
                z: -155,
                duration: 1.5,
                ease: "power2.out",
            });

            tl.to(camera.rotation, {
                x: -0.02,
                duration: 1,
            }, "<");

            // ═══════════════════════════════════════════════════════════
            // SCENE 6: THE ASCENSION (Roadmap + Footer)
            // Final pull into the portal vortex
            // ═══════════════════════════════════════════════════════════
            tl.to(camera.position, {
                y: 0,
                z: -180,
                duration: 2,
                ease: "power2.inOut",
            });

            tl.to(camera.rotation, {
                x: 0,
                z: 0,
                duration: 1,
            }, "<");

            // Final ascension through the portal
            tl.to(camera.position, {
                z: -195,
                duration: 1.5,
                ease: "power3.in",
            });

            // Slight rotation as entering the void
            tl.to(camera.rotation, {
                z: 0.1,
                duration: 1,
            }, "<0.5");
        });

        return () => ctx.revert();
    }, [camera]);

    return null;
}
