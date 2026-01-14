"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function TechSpecsSection() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-center mb-4 text-green-500 font-display tracking-tighter uppercase text-shadow-glow"
                >
                    {">"} {t.techSpecs.title}
                </motion.h2>
                <p className="text-center text-green-500/60 font-mono mb-16">{t.techSpecs.subtitle}</p>

                <div className="terminal-window p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.techSpecs.specs.map((spec, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex justify-between items-center py-3 border-b border-green-500/20 font-mono text-sm"
                            >
                                <span className="text-green-500/70">{spec.label}</span>
                                <span className="text-green-400 font-bold">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
