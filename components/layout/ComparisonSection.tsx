"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function ComparisonSection() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-center mb-4 text-green-500 font-display tracking-tighter uppercase text-shadow-glow"
                >
                    {">"} {t.comparison.title}
                </motion.h2>
                <p className="text-center text-green-500/60 font-mono mb-12">{t.comparison.subtitle}</p>

                <div className="terminal-window overflow-x-auto">
                    <table className="w-full font-mono text-sm">
                        <thead>
                            <tr className="border-b-2 border-green-500/30">
                                {t.comparison.headers.map((header, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-4 px-4 text-left font-bold uppercase ${idx === 1 ? 'text-green-400 bg-green-500/10' : 'text-green-500/70'
                                            }`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {t.comparison.rows.map((row, idx) => (
                                <motion.tr
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="border-b border-green-500/10 hover:bg-green-500/5"
                                >
                                    <td className="py-3 px-4 text-white font-bold">{row.feature}</td>
                                    {row.values.map((value, vIdx) => (
                                        <td
                                            key={vIdx}
                                            className={`py-3 px-4 ${vIdx === 0 ? 'text-green-400 font-bold bg-green-500/5' : 'text-green-500/70'
                                                }`}
                                        >
                                            {value}
                                        </td>
                                    ))}
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="text-center text-green-500/40 font-mono text-xs mt-6">
                    {t.comparison.disclaimer}
                </p>
            </div>
        </section>
    );
}
