'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function ChangelogSection() {
    const { language } = useLanguage();
    const t = translations[language].changelog;

    const getTypeColor = (type: string) => {
        const t = type.toUpperCase();
        if (t === 'MAJOR') return 'text-red-400 bg-red-500/20 border-red-500/50';
        if (t === 'MINOR') return 'text-amber-400 bg-amber-500/20 border-amber-500/50';
        return 'text-green-400 bg-green-500/20 border-green-500/50';
    };

    return (
        <section className="relative min-h-screen py-32 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
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
                    <p className="text-green-500/70 font-mono text-lg">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-green-500/30 transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {t.releases.map((release, index) => (
                            <motion.div
                                key={release.version}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className={`relative flex flex-col md:flex-row gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Version circle */}
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-black border-2 border-green-500 transform -translate-x-1/2 flex items-center justify-center z-10">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                </div>

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="terminal-window p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl font-mono font-bold text-green-400">
                                                v{release.version}
                                            </span>
                                            <span className={`px-2 py-1 text-xs font-mono border ${getTypeColor(release.type)}`}>
                                                {release.type}
                                            </span>
                                        </div>
                                        <div className="text-green-500/50 font-mono text-sm mb-4">
                                            {release.date}
                                        </div>
                                        <ul className="space-y-2">
                                            {release.changes.map((change, i) => (
                                                <li key={i} className="flex items-start gap-2 text-green-500/80 font-mono text-sm">
                                                    <span className="text-green-500 flex-shrink-0">+</span>
                                                    {change}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
