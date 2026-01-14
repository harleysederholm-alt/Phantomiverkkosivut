"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function UseCasesSection() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-center mb-4 text-green-500 font-display tracking-tighter uppercase text-shadow-glow"
                >
                    {">"} {t.useCases.title}
                </motion.h2>
                <p className="text-center text-green-500/60 font-mono mb-16">{t.useCases.subtitle}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.useCases.cases.map((useCase, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="terminal-window p-6 hover:bg-green-500/5 transition-colors group"
                        >
                            <div className="text-4xl mb-4">{useCase.icon}</div>
                            <h3 className="text-lg font-bold text-white font-mono uppercase mb-3 group-hover:text-green-400 transition-colors">
                                {useCase.title}
                            </h3>
                            <p className="text-green-500/70 text-sm font-mono leading-relaxed">
                                {useCase.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
