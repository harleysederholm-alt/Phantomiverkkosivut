"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function ThreatModelSection() {
    const { t } = useLanguage();

    const getStatusColor = (status: string) => {
        if (status.includes("FULLY") || status.includes("TÄYSIN") || status.includes("ELIMINATED") || status.includes("ELIMINOITU")) {
            return "text-green-400";
        }
        if (status.includes("DEFENSIVE") || status.includes("PUOLUSTAVA")) {
            return "text-amber-500";
        }
        return "text-green-500";
    };

    return (
        <section className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-center mb-4 text-green-500 font-display tracking-tighter uppercase text-shadow-glow"
                >
                    {">"} {t.threatModel.title}
                </motion.h2>
                <p className="text-center text-green-500/60 font-mono mb-4">{t.threatModel.subtitle}</p>
                <p className="text-center text-green-500/80 font-mono mb-16">{t.threatModel.description}</p>

                {/* Threat Cards */}
                <div className="space-y-4 mb-16">
                    {t.threatModel.threats.map((threat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="terminal-window p-6"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-red-500 font-mono mb-2">
                                        ⚠ {threat.adversary}
                                    </h3>
                                    <p className="text-green-500/60 text-sm font-mono mb-2">
                                        <span className="text-amber-500/80">CAPABILITY:</span> {threat.capability}
                                    </p>
                                    <p className="text-green-500/80 text-sm font-mono">
                                        <span className="text-green-400">MITIGATION:</span> {threat.mitigation}
                                    </p>
                                </div>
                                <div className={`font-mono font-bold text-sm whitespace-nowrap px-4 py-2 border border-green-500/30 ${getStatusColor(threat.status)}`}>
                                    ✓ {threat.status}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Limitations Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="terminal-window p-8 border-amber-500/50"
                >
                    <h3 className="text-xl font-bold text-amber-500 font-display mb-6 text-center">
                        ⚠ {t.threatModel.limitations.title}
                    </h3>
                    <ul className="space-y-3">
                        {t.threatModel.limitations.items.map((item, idx) => (
                            <li
                                key={idx}
                                className="text-green-500/80 font-mono text-sm flex items-start gap-3"
                            >
                                <span className="text-amber-500">→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
