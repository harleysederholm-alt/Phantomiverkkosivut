'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function OpenSourceSection() {
    const { language } = useLanguage();
    const t = translations[language].openSource;

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
                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-green-500 text-shadow-glow mb-4">
                        &gt; {t.title}
                    </h2>
                    <p className="text-green-500/70 font-mono text-lg max-w-3xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
                >
                    {t.stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="terminal-window p-4 text-center group hover:border-green-400 transition-colors"
                        >
                            <span className="text-2xl mb-2 block">{stat.icon}</span>
                            <div className="text-2xl font-mono font-bold text-green-400 group-hover:text-green-300">
                                {stat.value}
                            </div>
                            <div className="text-xs font-mono text-green-500/60 mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Repositories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                >
                    {t.repos.map((repo, index) => (
                        <div
                            key={repo.name}
                            className="terminal-window p-6 hover:border-green-400 transition-colors cursor-pointer group"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-mono font-bold text-green-400 group-hover:text-green-300">
                                    📦 {repo.name}
                                </h3>
                                <div className="flex items-center gap-2 text-amber-500 font-mono text-sm">
                                    ⭐ {repo.stars.toLocaleString()}
                                </div>
                            </div>
                            <p className="text-green-500/70 font-mono text-sm mb-4">
                                {repo.description}
                            </p>
                            <div className="flex items-center justify-between text-xs font-mono">
                                <span className="text-cyan-400">{repo.language}</span>
                                <span className="text-green-500/50">{repo.lastCommit}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Reproducible Builds */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="terminal-window p-8"
                >
                    <h3 className="text-xl font-mono font-bold text-green-400 mb-4">
                        🔐 {t.buildStatus.title}
                    </h3>
                    <p className="text-green-500/70 font-mono text-sm mb-6">
                        {t.buildStatus.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {t.buildStatus.platforms.map((platform) => (
                            <div
                                key={platform.name}
                                className="bg-black/50 border border-green-500/30 p-4"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-green-400 font-mono text-sm font-bold">
                                        {platform.status}
                                    </span>
                                </div>
                                <div className="text-green-500/80 font-mono text-sm">
                                    {platform.name}
                                </div>
                                <div className="text-green-500/40 font-mono text-xs mt-1">
                                    {platform.hash}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
