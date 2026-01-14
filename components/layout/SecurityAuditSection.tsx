"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function SecurityAuditSection() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-center mb-4 text-green-500 font-display tracking-tighter uppercase text-shadow-glow"
                >
                    {">"} {t.securityAudit.title}
                </motion.h2>
                <p className="text-center text-green-500/60 font-mono mb-16">{t.securityAudit.subtitle}</p>

                {/* Audit Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {t.securityAudit.audits.map((audit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            className="terminal-window p-6 flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold text-white font-mono">{audit.firm}</h3>
                                <span className="text-amber-500 text-xs font-mono">{audit.date}</span>
                            </div>
                            <p className="text-green-500/60 text-xs font-mono mb-2">{audit.scope}</p>
                            <p className="text-green-400 text-sm font-mono font-bold mb-4 border-l-2 border-green-500 pl-3">
                                {audit.finding}
                            </p>
                            <blockquote className="text-green-500/80 text-sm font-mono italic flex-grow">
                                &ldquo;{audit.quote}&rdquo;
                            </blockquote>
                        </motion.div>
                    ))}
                </div>

                {/* Bug Bounty Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="terminal-window p-8"
                >
                    <h3 className="text-2xl font-bold text-amber-500 font-display mb-4 text-center">
                        {">"} {t.securityAudit.bugBounty.title}
                    </h3>
                    <p className="text-center text-green-500/70 font-mono mb-8">
                        {t.securityAudit.bugBounty.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {t.securityAudit.bugBounty.tiers.map((tier, idx) => (
                            <div
                                key={idx}
                                className="text-center p-4 border border-green-500/20 bg-green-500/5"
                            >
                                <p className={`text-sm font-mono font-bold mb-2 ${idx === 0 ? 'text-red-500' :
                                        idx === 1 ? 'text-orange-500' :
                                            idx === 2 ? 'text-amber-500' : 'text-green-500'
                                    }`}>
                                    {tier.severity}
                                </p>
                                <p className="text-white font-mono text-lg font-bold">{tier.reward}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-green-400 font-mono font-bold text-lg">
                        {t.securityAudit.bugBounty.totalPaid}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
