"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative pointer-events-none z-10">
            <div className="text-center p-4 relative z-20 mix-blend-screen">
                {/* TERMINAL HEADER */}
                <div className="mb-8 font-mono text-xs md:text-sm text-green-500/60 tracking-widest uppercase">
                    <p>{">"} SYSTEM_BOOT_SEQUENCE_INIT</p>
                    <p>{">"} CONNECTING_TO_MESH... [OK]</p>
                    <p>{">"} ESTABLISHING_SECURE_TUNNEL... [OK]</p>
                </div>

                {/* MAIN HEADLINE */}
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-6 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)] glitch-text">
                    {t.hero.headline}
                </h1>

                {/* SUBHEADLINE WITH TERMINAL BOX */}
                <div className="inline-block border border-green-500/50 bg-black/80 px-4 py-2 mb-12 backdrop-blur-sm">
                    <p className="text-xl md:text-2xl text-green-400 font-mono tracking-widest">
                        {t.hero.subheadline}
                        <span className="animate-pulse ml-2">_</span>
                    </p>
                </div>

                {/* CTA BUTTONS - RAW TERMINAL */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="#features" className="group relative px-8 py-4 bg-green-500 text-black font-bold font-mono tracking-widest hover:bg-green-400 transition-all clip-path-polygon">
                        <span className="flex items-center gap-2">
                            {">"} {t.hero.ctaPrimary}
                        </span>
                    </a>

                    <a href="#whitepaper" className="group px-8 py-4 border border-green-500 text-green-500 font-mono tracking-widest hover:bg-green-500/10 transition-all">
                        [{t.hero.ctaSecondary}]
                    </a>
                </div>

                {/* SCROLL INDICATOR */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-green-500/50 text-xs font-mono animate-bounce">
                    SCROLL_TO_DECRYPT
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
            >
                <p className="text-xs text-gray-500 mb-2 font-mono">SCROLL_TO_INITiate_SEQUENCE</p>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-toxic-green to-transparent mx-auto animate-pulse" />
            </motion.div>
        </section>
    )
}
