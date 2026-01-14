"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function PressQuotesSection() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-center mb-4 text-green-500 font-display tracking-tighter uppercase text-shadow-glow"
                >
                    {">"} {t.pressQuotes.title}
                </motion.h2>
                <p className="text-center text-green-500/60 font-mono mb-16">{t.pressQuotes.subtitle}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.pressQuotes.quotes.map((quote, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            className="terminal-window p-8 flex flex-col"
                        >
                            <div className="text-green-500/30 text-6xl font-serif leading-none mb-4">&ldquo;</div>
                            <blockquote className="text-green-500/90 font-mono text-lg leading-relaxed flex-grow mb-6">
                                {quote.text}
                            </blockquote>
                            <div className="border-t border-green-500/20 pt-4">
                                <p className="text-white font-mono font-bold">{quote.author}</p>
                                {quote.role && (
                                    <p className="text-green-500/60 font-mono text-sm">{quote.role}</p>
                                )}
                                <p className="text-amber-500 font-mono text-xs mt-1">{quote.publication}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
