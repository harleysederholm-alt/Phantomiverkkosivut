'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function NodeGuideSection() {
    const { language } = useLanguage();
    const t = translations[language].nodeGuide;

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
                    <p className="text-amber-500 font-mono text-sm max-w-2xl mx-auto">
                        {t.intro}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Hardware Requirements */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="terminal-window p-6"
                    >
                        <h3 className="text-lg font-mono font-bold text-green-400 mb-6">
                            ⚙️ {t.requirements.title}
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full font-mono text-sm">
                                <thead>
                                    <tr className="border-b border-green-500/30">
                                        <th className="text-left text-green-400 py-2">SPEC</th>
                                        <th className="text-left text-amber-500 py-2">MIN</th>
                                        <th className="text-left text-cyan-400 py-2">REC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {t.requirements.hardware.map((req) => (
                                        <tr key={req.spec} className="border-b border-green-500/20">
                                            <td className="py-3 text-green-500/80">{req.spec}</td>
                                            <td className="py-3 text-amber-500/70">{req.min}</td>
                                            <td className="py-3 text-cyan-400">{req.recommended}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 space-y-2">
                            {t.requirements.software.map((sw, index) => (
                                <div key={index} className="flex items-center gap-2 text-green-500/70 font-mono text-sm">
                                    <span className="text-green-500">✓</span>
                                    {sw}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Node Incentives */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="terminal-window p-6"
                    >
                        <h3 className="text-lg font-mono font-bold text-green-400 mb-4">
                            🏆 {t.rewards.title}
                        </h3>
                        <p className="text-green-500/70 font-mono text-sm mb-6">
                            {t.rewards.description}
                        </p>
                        <div className="space-y-3">
                            {t.rewards.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 bg-black/30 border border-green-500/20 p-3"
                                >
                                    <span className="text-amber-500 font-mono">{index + 1}.</span>
                                    <span className="text-green-500/80 font-mono text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Deployment Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="terminal-window p-8"
                >
                    <h3 className="text-xl font-mono font-bold text-green-400 mb-8">
                        🚀 {t.setup.title}
                    </h3>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-green-500/30 hidden md:block" />

                        <div className="space-y-8">
                            {t.setup.steps.map((step) => (
                                <div key={step.step} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 border border-green-500/50 flex items-center justify-center font-mono text-green-400 font-bold relative z-10">
                                        {step.step}
                                    </div>
                                    <div className="flex-grow pt-2">
                                        <h4 className="text-green-400 font-mono font-bold mb-2">
                                            {step.title}
                                        </h4>
                                        <p className="text-green-500/70 font-mono text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
