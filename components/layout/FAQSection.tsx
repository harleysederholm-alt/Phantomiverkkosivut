"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";

export default function FAQSection() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center py-24">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-center mb-16 text-green-500 font-display tracking-tighter uppercase text-shadow-glow"
                >
                    {">"} {t.faq.title}
                </motion.h2>

                <div className="space-y-4">
                    {t.faq.items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="terminal-window overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-green-500/5 transition-colors"
                            >
                                <span className="text-white font-mono font-bold uppercase">
                                    {">"} {item.question}
                                </span>
                                <span className="text-green-500 text-2xl">
                                    {openIndex === idx ? "−" : "+"}
                                </span>
                            </button>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-6"
                                >
                                    <p className="text-green-500/80 font-mono text-sm leading-relaxed border-l-2 border-green-500/30 pl-4">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
