"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function NetworkStatsSection() {
    const { t } = useLanguage();

    const getTrendColor = (trend: string) => {
        if (trend.startsWith("+")) return "text-green-400";
        if (trend.startsWith("-")) return "text-red-400";
        return "text-amber-500";
    };

    return (
        <section className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-center mb-4 text-green-500 font-display tracking-tighter uppercase text-shadow-glow"
                >
                    {">"} {t.networkStats.title}
                </motion.h2>
                <p className="text-center text-green-500/60 font-mono mb-4">{t.networkStats.subtitle}</p>

                {/* Blinking indicator */}
                <div className="flex items-center justify-center gap-2 mb-12">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-green-500 font-mono text-sm">LIVE DATA FEED</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                    {t.networkStats.stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="terminal-window p-6 text-center"
                        >
                            <p className="text-green-500/60 font-mono text-xs mb-2 uppercase">{stat.label}</p>
                            <p className="text-white font-display text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                            <p className={`font-mono text-sm ${getTrendColor(stat.trend)}`}>
                                {stat.trend}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Node Distribution */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="terminal-window p-8"
                >
                    <h3 className="text-xl font-bold text-green-500 font-display mb-6 text-center">
                        {">"} {t.networkStats.nodeMap.title}
                    </h3>
                    <div className="space-y-4">
                        {t.networkStats.nodeMap.regions.map((region, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <span className="text-green-500/70 font-mono text-sm w-32 shrink-0">
                                    {region.region}
                                </span>
                                <div className="flex-1 h-6 bg-green-500/10 relative overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${region.percentage}%` }}
                                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                                        className="h-full bg-gradient-to-r from-green-500/50 to-green-400/80"
                                    />
                                </div>
                                <span className="text-white font-mono text-sm w-20 text-right">
                                    {region.nodes.toLocaleString()}
                                </span>
                                <span className="text-green-500/60 font-mono text-xs w-12">
                                    {region.percentage}%
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <p className="text-center text-green-500/40 font-mono text-xs mt-6">
                    {t.networkStats.disclaimer}
                </p>
            </div>
        </section>
    );
}
