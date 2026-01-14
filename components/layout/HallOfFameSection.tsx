'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function HallOfFameSection() {
    const { language } = useLanguage();
    const t = translations[language].hallOfFame;

    const getSeverityColor = (severity: string) => {
        const sev = severity.toUpperCase();
        if (sev.includes('CRITICAL') || sev.includes('KRIITTINEN')) {
            return 'text-red-400 bg-red-500/20 border-red-500/50';
        }
        if (sev.includes('HIGH') || sev.includes('KORKEA')) {
            return 'text-amber-400 bg-amber-500/20 border-amber-500/50';
        }
        return 'text-cyan-400 bg-cyan-500/20 border-cyan-500/50';
    };

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
                    <p className="text-green-500/70 font-mono text-lg mb-4">
                        {t.subtitle}
                    </p>
                    <p className="text-green-500/50 font-mono text-sm max-w-2xl mx-auto">
                        {t.description}
                    </p>
                </motion.div>

                {/* Total Paid Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-amber-500/10 border-2 border-amber-500/50 px-8 py-4">
                        <div className="text-amber-500 font-mono text-sm mb-1">TOTAL BOUNTIES PAID</div>
                        <div className="text-4xl md:text-5xl font-mono font-bold text-amber-400">
                            {t.totalPaid}
                        </div>
                    </div>
                </motion.div>

                {/* Researchers Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4 mb-12"
                >
                    {t.researchers.map((researcher, index) => (
                        <motion.div
                            key={researcher.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="terminal-window p-6 hover:border-amber-500/50 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">🏅</span>
                                        <h3 className="text-lg font-mono font-bold text-green-400">
                                            {researcher.name}
                                        </h3>
                                        <span className={`px-2 py-1 text-xs font-mono border ${getSeverityColor(researcher.severity)}`}>
                                            {researcher.severity}
                                        </span>
                                    </div>
                                    <p className="text-green-500/60 font-mono text-sm mb-2">
                                        {researcher.affiliation}
                                    </p>
                                    <p className="text-green-500/80 font-mono text-sm">
                                        &ldquo;{researcher.finding}&rdquo;
                                    </p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <div className="text-2xl font-mono font-bold text-amber-400">
                                        {researcher.bounty}
                                    </div>
                                    <div className="text-green-500/50 font-mono text-xs">
                                        {researcher.date}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Report Vulnerability */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <div className="inline-block bg-green-500/10 border border-green-500/30 px-6 py-3 font-mono text-green-400 text-sm">
                        🔒 {t.disclaimer}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
