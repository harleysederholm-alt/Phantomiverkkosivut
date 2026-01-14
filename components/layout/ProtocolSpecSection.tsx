'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function ProtocolSpecSection() {
    const { language } = useLanguage();
    const t = translations[language].protocolSpec;

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
                    <p className="text-emerald-500/80 font-mono text-lg mb-2">
                        {t.subtitle}
                    </p>
                    <div className="inline-block bg-emerald-500/15 border border-emerald-500/40 px-4 py-2 font-mono text-emerald-400 text-sm">
                        {t.version}
                    </div>
                </motion.div>

                {/* Protocol Layers */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 mb-16"
                >
                    {t.layers.map((layer, index) => (
                        <motion.div
                            key={layer.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="terminal-window p-6 hover:border-green-400 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center font-mono text-emerald-400 font-bold">
                                        L{index + 1}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-mono font-bold text-emerald-400 mb-2">
                                        {layer.name}
                                    </h3>
                                    <p className="text-emerald-500/80 font-mono text-sm mb-4">
                                        {layer.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {layer.specs.map((spec) => (
                                            <span
                                                key={spec}
                                                className="bg-black/60 border border-teal-500/30 px-3 py-1 text-teal-400 font-mono text-xs"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Message Format */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="terminal-window p-8"
                >
                    <h3 className="text-xl font-mono font-bold text-emerald-400 mb-6">
                        📨 {t.messageFormat.title}
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full font-mono text-sm">
                            <thead>
                                <tr className="border-b border-green-500/30">
                                    <th className="text-left text-emerald-400 py-3 px-4">FIELD</th>
                                    <th className="text-left text-emerald-400 py-3 px-4">SIZE</th>
                                    <th className="text-left text-emerald-400 py-3 px-4">DESCRIPTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.messageFormat.fields.map((field, index) => (
                                    <tr
                                        key={field.name}
                                        className="border-b border-emerald-500/20 hover:bg-emerald-500/5"
                                    >
                                        <td className="py-3 px-4 text-amber-500">{field.name}</td>
                                        <td className="py-3 px-4 text-teal-400">{field.size}</td>
                                        <td className="py-3 px-4 text-emerald-500/80">{field.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
