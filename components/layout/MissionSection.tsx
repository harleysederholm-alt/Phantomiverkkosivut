"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function MissionSection() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center py-24">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-center mb-16 text-green-500 font-display tracking-tighter uppercase text-shadow-glow"
                >
                    {">"} {t.mission.title}
                </motion.h2>

                <div className="terminal-window p-8 md:p-12 space-y-8">
                    {t.mission.paragraphs.map((paragraph, idx) => (
                        <motion.p
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            className="text-green-500/90 font-mono text-lg leading-relaxed"
                        >
                            {">"} {paragraph}
                        </motion.p>
                    ))}

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-amber-500 font-display text-xl text-right tracking-widest pt-8 border-t border-green-500/20"
                    >
                        {t.mission.signature}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
