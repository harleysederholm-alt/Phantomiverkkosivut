'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function GlobalReachSection() {
    const { language } = useLanguage();
    const t = translations[language].globalReach;

    return (
        <section className="relative min-h-screen py-32 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-emerald-400 text-shadow-glow mb-4">
                        &gt; {t.title}
                    </h2>
                    <p className="text-emerald-500/80 font-mono text-lg">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Global Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    <div className="terminal-window p-6 text-center">
                        <div className="text-4xl font-mono font-bold text-emerald-400 mb-2">
                            {t.stats.countries}
                        </div>
                        <div className="text-emerald-500/70 font-mono text-sm">COUNTRIES</div>
                    </div>
                    <div className="terminal-window p-6 text-center">
                        <div className="text-4xl font-mono font-bold text-emerald-400 mb-2">
                            {t.stats.continents}
                        </div>
                        <div className="text-emerald-500/70 font-mono text-sm">CONTINENTS</div>
                    </div>
                    <div className="terminal-window p-6 text-center">
                        <div className="text-4xl font-mono font-bold text-amber-500 mb-2">
                            {t.stats.activeUsers}
                        </div>
                        <div className="text-emerald-500/70 font-mono text-sm">ACTIVE USERS</div>
                    </div>
                    <div className="terminal-window p-6 text-center">
                        <div className="text-4xl font-mono font-bold text-teal-400 mb-2">
                            {t.stats.dailyMessages}
                        </div>
                        <div className="text-emerald-500/70 font-mono text-sm">DAILY MESSAGES</div>
                    </div>
                </motion.div>

                {/* Regional Breakdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {t.regions.map((region, index) => (
                        <motion.div
                            key={region.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="terminal-window p-6 hover:border-green-400 transition-colors"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-mono font-bold text-emerald-400">
                                    {region.name}
                                </h3>
                                <span className="text-emerald-500 font-mono text-sm bg-emerald-500/15 px-2 py-1">
                                    {region.growth}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <div className="text-2xl font-mono font-bold text-amber-500">
                                        {region.nodes.toLocaleString()}
                                    </div>
                                    <div className="text-emerald-500/60 font-mono text-xs">NODES</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-mono font-bold text-teal-400">
                                        {region.users}
                                    </div>
                                    <div className="text-emerald-500/60 font-mono text-xs">USERS</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {region.topCountries.map((country) => (
                                    <span
                                        key={country}
                                        className="text-xs font-mono text-emerald-500/70 bg-black/60 px-2 py-1 border border-emerald-500/25"
                                    >
                                        {country}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Restricted Regions Warning */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="terminal-window p-6 border-red-500/30 hover:border-red-500/50 transition-colors"
                >
                    <div className="flex items-start gap-4">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <h3 className="text-lg font-mono font-bold text-red-400 mb-2">
                                {t.bannedRegions.title}
                            </h3>
                            <p className="text-emerald-500/80 font-mono text-sm mb-4">
                                {t.bannedRegions.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {t.bannedRegions.regions.map((region) => (
                                    <span
                                        key={region}
                                        className="text-xs font-mono text-red-400 bg-red-500/10 px-3 py-1 border border-red-500/30"
                                    >
                                        {region}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
