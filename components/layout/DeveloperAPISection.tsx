'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function DeveloperAPISection() {
    const { language } = useLanguage();
    const t = translations[language].developerAPI;

    const getStatusColor = (status: string) => {
        switch (status.toUpperCase()) {
            case 'STABLE':
            case 'VAKAA':
                return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/40';
            case 'BETA':
                return 'text-amber-500 bg-amber-500/15 border-amber-500/40';
            case 'ALPHA':
                return 'text-red-400 bg-red-500/15 border-red-500/40';
            default:
                return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/40';
        }
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
                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-emerald-400 text-shadow-glow mb-4">
                        &gt; {t.title}
                    </h2>
                    <p className="text-emerald-500/80 font-mono text-lg">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* SDKs Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
                >
                    {t.sdks.map((sdk) => (
                        <div
                            key={sdk.language}
                            className="terminal-window p-4 text-center hover:border-green-400 transition-colors cursor-pointer"
                        >
                            <div className="text-emerald-400 font-mono font-bold text-sm mb-2">
                                {sdk.language}
                            </div>
                            <div className={`inline-block px-2 py-1 text-xs font-mono border ${getStatusColor(sdk.status)}`}>
                                {sdk.status}
                            </div>
                            <div className="text-emerald-500/60 font-mono text-xs mt-2">
                                v{sdk.version}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Code Examples */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
                >
                    {t.examples.map((example) => (
                        <div key={example.title} className="terminal-window p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-emerald-400 font-mono font-bold">
                                    {example.title}
                                </h3>
                                <span className="text-teal-400 font-mono text-xs uppercase">
                                    {example.language}
                                </span>
                            </div>
                            <pre className="bg-black/60 p-4 overflow-x-auto border border-emerald-500/20">
                                <code className="text-emerald-500/85 font-mono text-sm whitespace-pre">
                                    {example.code}
                                </code>
                            </pre>
                        </div>
                    ))}
                </motion.div>

                {/* Rate Limit Notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <div className="inline-block bg-emerald-500/10 border border-emerald-500/25 px-6 py-3 font-mono text-emerald-400 text-sm">
                        ⚡ {t.rateLimit}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
