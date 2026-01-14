'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function FooterSection() {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="relative py-16 px-4 md:px-8 border-t border-emerald-500/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-mono font-bold text-emerald-400 text-shadow-glow mb-4">
                            PHANTOMI
                        </h3>
                        <p className="text-emerald-500/70 font-mono text-sm mb-4">
                            {t.tagline}
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="text-emerald-500/85 font-mono text-xs">
                                NETWORK OPERATIONAL
                            </span>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-emerald-400 font-mono font-bold mb-4">RESOURCES</h4>
                        <nav className="space-y-2">
                            <a
                                href="#"
                                className="block text-emerald-500/70 font-mono text-sm hover:text-emerald-400 transition-colors"
                            >
                                &gt; {t.links.whitepaper}
                            </a>
                            <a
                                href="#"
                                className="block text-emerald-500/70 font-mono text-sm hover:text-emerald-400 transition-colors"
                            >
                                &gt; {t.links.github}
                            </a>
                            <a
                                href="#"
                                className="block text-emerald-500/70 font-mono text-sm hover:text-emerald-400 transition-colors"
                            >
                                &gt; {t.links.audit}
                            </a>
                            <a
                                href="#"
                                className="block text-emerald-500/70 font-mono text-sm hover:text-emerald-400 transition-colors"
                            >
                                &gt; {t.links.contact}
                            </a>
                        </nav>
                    </div>

                    {/* Status */}
                    <div>
                        <h4 className="text-emerald-400 font-mono font-bold mb-4">SYSTEM STATUS</h4>
                        <div className="terminal-window p-4">
                            <div className="space-y-2 font-mono text-xs">
                                <div className="flex items-center justify-between">
                                    <span className="text-emerald-500/70">CORE PROTOCOL</span>
                                    <span className="text-emerald-400">● ONLINE</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-emerald-500/70">MESH NETWORK</span>
                                    <span className="text-emerald-400">● ONLINE</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-emerald-500/70">RELAY NODES</span>
                                    <span className="text-amber-500">● 12,402</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-emerald-500/70">UPTIME</span>
                                    <span className="text-teal-400">99.9997%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 pt-8 border-t border-emerald-500/10 text-center"
                >
                    <p className="text-emerald-500/50 font-mono text-xs">
                        {t.copyright}
                    </p>
                    <p className="text-emerald-500/30 font-mono text-xs mt-2">
                        ENTER THE VOID. BECOME A GHOST.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
