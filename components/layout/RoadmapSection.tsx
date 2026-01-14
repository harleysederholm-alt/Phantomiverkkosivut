"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function RoadmapSection() {
    const { t } = useLanguage();

    return (
        <section className="min-h-[200vh] w-full relative z-10 flex flex-col items-center justify-center py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-center mb-16 text-green-500 font-display tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]"
                >
                    {">"} {t.roadmap.title}
                </motion.h2>

                <div className="space-y-4 border-l-2 border-green-500/30 pl-8 ml-4">
                    {t.roadmap.items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative"
                        >
                            {/* Timestamp Marker */}
                            <div className="absolute -left-[41px] top-6 w-4 h-4 bg-black border border-green-500 flex items-center justify-center">
                                <div className="w-2 h-2 bg-green-500 animate-pulse" />
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 p-6 terminal-window hover:bg-green-500/5 transition-colors group">
                                <div className="min-w-[160px] font-mono text-sm">
                                    <span className="text-green-500 block">[{item.date}]</span>
                                    <span className="text-amber-500 block mt-1 uppercase tracking-wider">{item.phase}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-mono uppercase group-hover:text-green-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-green-500/70 leading-relaxed font-mono text-sm max-w-2xl">
                                        {">"} {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}