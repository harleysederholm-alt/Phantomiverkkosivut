"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";

// Whitepaper content in both languages
const whitepaperContent = {
    en: {
        title: "PHANTOMI PROTOCOL",
        subtitle: "Zero-Knowledge Encrypted Messaging Whitepaper v2.0",
        abstract: {
            title: "1. ABSTRACT",
            content: "Phantomi is a next-generation decentralized messaging protocol that provides quantum-resistant end-to-end encryption, metadata protection, and complete anonymity through a novel onion-routing mesh network. Unlike traditional messaging platforms, Phantomi operates without central servers, ensuring that no single point of failure or surveillance can compromise user privacy."
        },
        architecture: {
            title: "2. CORE ARCHITECTURE",
            items: [
                { label: "Mesh Network:", text: "Decentralized peer-to-peer topology with no central authority" },
                { label: "Quantum Encryption:", text: "CRYSTALS-Kyber + X25519 hybrid key exchange" },
                { label: "Onion Routing:", text: "7-layer encrypted routing with random path selection" },
                { label: "Zero-Knowledge:", text: "ZK-SNARK proofs for authentication without identity exposure" }
            ]
        },
        security: {
            title: "3. SECURITY MODEL",
            content: "Phantomi employs a multi-layered defense approach: post-quantum cryptography protects against future quantum computing attacks, while metadata obfuscation prevents traffic analysis. Messages are fragmented, encrypted, and routed through multiple independent paths, making correlation attacks computationally infeasible."
        },
        privacy: {
            title: "4. PRIVACY GUARANTEES",
            items: [
                { label: "✓ Forward Secrecy", text: "Past messages remain secure even if keys are compromised" },
                { label: "✓ Deniability", text: "Cryptographic deniability for all message exchanges" },
                { label: "✓ Metadata Protection", text: "No timestamps, IP addresses, or device fingerprints stored" },
                { label: "✓ Disappearing Messages", text: "Automatic cryptographic shredding after expiry" }
            ]
        },
        footer: {
            classified: "🔐 CLASSIFIED: PHANTOMI FOUNDATION 2024",
            authorized: "This document is for authorized eyes only."
        }
    },
    fi: {
        title: "PHANTOMI PROTOKOLLA",
        subtitle: "Nollatietosalauksella suojattu viestiprotokolla v2.0",
        abstract: {
            title: "1. TIIVISTELMÄ",
            content: "Phantomi on seuraavan sukupolven hajautettu viestintäprotokolla, joka tarjoaa kvanttitietokoneilta suojatun päästä päähän -salauksen, metatietosuojan ja täydellisen anonymiteetin uudenlaisen sipulireititysverkon kautta. Toisin kuin perinteiset viestintäalustat, Phantomi toimii ilman keskitettyjä palvelimia, varmistaen ettei yksikään vikakohta tai valvontajärjestelmä voi vaarantaa käyttäjän yksityisyyttä."
        },
        architecture: {
            title: "2. YDIN-ARKKITEHTUURI",
            items: [
                { label: "Mesh-verkko:", text: "Hajautettu vertaisverkkotopologia ilman keskitettyä hallintaa" },
                { label: "Kvanttisalaus:", text: "CRYSTALS-Kyber + X25519 hybridisen avaimen vaihto" },
                { label: "Sipulireititys:", text: "7-kerroksinen salattu reititys satunnaisella polunvalinnalla" },
                { label: "Nollatieto:", text: "ZK-SNARK todistukset autentikoinnissa ilman henkilöllisyyden paljastamista" }
            ]
        },
        security: {
            title: "3. TURVALLISUUSMALLI",
            content: "Phantomi käyttää monikerroksista puolustusstrategiaa: post-kvanttisalaus suojaa tulevilta kvanttitietokonehyökkäyksiltä, kun taas metatietojen häivytys estää liikenneanalyysin. Viestit pirstotaan, salataan ja reititetään useiden itsenäisten polkujen kautta, tehden korrelaatiohyökkäykset laskennallisesti mahdottomiksi."
        },
        privacy: {
            title: "4. YKSITYISYYSTAKUUT",
            items: [
                { label: "✓ Eteenpäin salaus", text: "Aiemmat viestit pysyvät turvassa vaikka avaimet paljastuisivat" },
                { label: "✓ Kiistettävyys", text: "Kryptografinen kiistettävyys kaikelle viestinnälle" },
                { label: "✓ Metatietosuoja", text: "Ei aikaleimoja, IP-osoitteita tai laitetunnisteita tallenneta" },
                { label: "✓ Katoavat viestit", text: "Automaattinen kryptografinen tuhoaminen vanhenemisen jälkeen" }
            ]
        },
        footer: {
            classified: "🔐 SALAINEN: PHANTOMI FOUNDATION 2024",
            authorized: "Tämä asiakirja on vain valtuutetuille silmille."
        }
    }
};

export default function HeroSection() {
    const { t, language } = useLanguage();
    const [showWhitepaper, setShowWhitepaper] = useState(false);

    const wp = whitepaperContent[language as keyof typeof whitepaperContent] || whitepaperContent.en;

    const openWhitepaper = () => {
        setShowWhitepaper(true);
    };

    const closeWhitepaper = () => {
        setShowWhitepaper(false);
        // Always return to top of page when closing whitepaper
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
        });
    };

    const handleEnterVoid = () => {
        // Use global journey controller
        const controller = (window as unknown as Record<string, { start?: () => void }>).__journeyController;
        if (controller?.start) {
            controller.start();
        }
    };

    return (
        <>
            <section id="hero" className="h-screen w-full flex flex-col items-center justify-center relative z-10">
                {/* Extra Dark overlay for hero text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50 z-0" />

                <div className="text-center p-4 relative z-20">
                    {/* TERMINAL HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 font-mono text-xs md:text-sm tracking-widest uppercase"
                    >
                        <p className="text-emerald-400 drop-shadow-[0_0_10px_rgba(0,0,0,1)]">{">"} SYSTEM_BOOT_SEQUENCE_INIT</p>
                        <p className="text-emerald-400 drop-shadow-[0_0_10px_rgba(0,0,0,1)]">{">"} CONNECTING_TO_MESH... <span className="text-amber-400">[OK]</span></p>
                        <p className="text-emerald-400 drop-shadow-[0_0_10px_rgba(0,0,0,1)]">{">"} ESTABLISHING_SECURE_TUNNEL... <span className="text-amber-400">[OK]</span></p>
                    </motion.div>

                    {/* MAIN HEADLINE */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter mb-6"
                        style={{
                            color: '#10b981',
                            textShadow: '0 0 40px rgba(16, 185, 129, 0.8), 0 0 80px rgba(16, 185, 129, 0.4), 0 4px 20px rgba(0,0,0,0.9)'
                        }}
                    >
                        {t.hero.headline}
                    </motion.h1>

                    {/* SUBHEADLINE WITH TERMINAL BOX */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="inline-block border-2 border-emerald-400/60 bg-black/90 px-6 py-3 mb-12 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                        <p className="text-xl md:text-2xl text-emerald-300 font-mono tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                            {t.hero.subheadline}
                            <span className="animate-pulse ml-2 text-amber-400">_</span>
                        </p>
                    </motion.div>

                    {/* CTA BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto"
                    >
                        {/* ENTER THE VOID - Uses global journey controller */}
                        <button
                            onClick={handleEnterVoid}
                            className="group relative px-10 py-5 bg-black border-2 border-emerald-400 text-emerald-400 font-bold font-mono tracking-widest hover:bg-emerald-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.8)]"
                        >
                            <span className="flex items-center gap-2 text-lg">
                                {">"} {t.hero.ctaPrimary}
                            </span>
                            <div className="absolute inset-0 bg-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>

                        {/* WHITEPAPER Button */}
                        <button
                            onClick={openWhitepaper}
                            className="group px-10 py-5 bg-black/80 border-2 border-amber-400/60 text-amber-400 font-mono tracking-widest hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                        >
                            <span className="text-lg">[{t.hero.ctaSecondary}]</span>
                        </button>
                    </motion.div>

                    {/* SCROLL INDICATOR */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-400/70 text-xs font-mono animate-bounce"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <span>SCROLL_TO_DECRYPT</span>
                            <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center pt-2">
                                <div className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHITEPAPER MODAL */}
            <AnimatePresence>
                {showWhitepaper && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-auto">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                            onClick={closeWhitepaper}
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-black border-2 border-emerald-400/60 shadow-[0_0_60px_rgba(16,185,129,0.4)] overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 border-b border-emerald-400/30 bg-emerald-400/5">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                    </div>
                                    <span className="font-mono text-emerald-400 text-sm">PHANTOMI_WHITEPAPER_v2.0.pdf</span>
                                </div>
                                <button
                                    onClick={closeWhitepaper}
                                    className="text-emerald-400 hover:text-white font-mono text-2xl px-3 py-1 hover:bg-emerald-400/20 transition-colors"
                                >
                                    ×
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)] font-mono text-emerald-300/90">
                                <h1 className="text-3xl font-bold text-emerald-400 mb-6 text-center">
                                    📄 {wp.title}
                                </h1>
                                <p className="text-amber-400 text-center mb-8">{wp.subtitle}</p>

                                <div className="space-y-6 text-sm leading-relaxed">
                                    {/* Abstract */}
                                    <section>
                                        <h2 className="text-xl text-emerald-400 mb-3 border-b border-emerald-400/30 pb-2">{wp.abstract.title}</h2>
                                        <p className="text-emerald-200/80">{wp.abstract.content}</p>
                                    </section>

                                    {/* Core Architecture */}
                                    <section>
                                        <h2 className="text-xl text-emerald-400 mb-3 border-b border-emerald-400/30 pb-2">{wp.architecture.title}</h2>
                                        <ul className="list-disc list-inside space-y-2 text-emerald-200/80">
                                            {wp.architecture.items.map((item, idx) => (
                                                <li key={idx}><span className="text-amber-400">{item.label}</span> {item.text}</li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* Security Model */}
                                    <section>
                                        <h2 className="text-xl text-emerald-400 mb-3 border-b border-emerald-400/30 pb-2">{wp.security.title}</h2>
                                        <p className="text-emerald-200/80">{wp.security.content}</p>
                                    </section>

                                    {/* Privacy Guarantees */}
                                    <section>
                                        <h2 className="text-xl text-emerald-400 mb-3 border-b border-emerald-400/30 pb-2">{wp.privacy.title}</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-emerald-200/80">
                                            {wp.privacy.items.map((item, idx) => (
                                                <div key={idx} className="border border-emerald-400/20 p-3">
                                                    <span className="text-amber-400 block mb-1">{item.label}</span>
                                                    {item.text}
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Footer */}
                                    <div className="text-center pt-6 border-t border-emerald-400/30">
                                        <p className="text-amber-400">{wp.footer.classified}</p>
                                        <p className="text-emerald-400/50 text-xs mt-2">{wp.footer.authorized}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
