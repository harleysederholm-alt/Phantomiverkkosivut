"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export default function DeploymentSection() {
    const { t } = useLanguage();

    return (
        <section className="min-h-[150vh] w-full relative z-10 flex flex-col items-center justify-center py-24 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl px-4"
            >
                <div className="mb-8 relative inline-block">
                    <h2 className="text-5xl md:text-7xl font-black font-display text-green-500 uppercase tracking-tighter relative z-10 text-shadow-glow">
                        <span className="text-3xl align-top mr-4 opacity-50">{">"}</span>
                        {t.deployment.title}
                    </h2>
                </div>

                <p className="text-xl md:text-2xl text-green-500 mb-12 font-mono max-w-2xl mx-auto leading-relaxed">
                    {t.deployment.subtitle}
                    <span className="animate-pulse">_</span>
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button className="group relative px-8 py-4 bg-green-500 text-black font-mono font-bold tracking-widest hover:bg-green-400 hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] transition-all clip-path-polygon">
                        <span className="flex items-center gap-2">
                            {">"} ./INITIALIZE_CORE.sh
                        </span>
                    </button>

                    <button className="group px-8 py-4 border border-green-500 text-green-500 font-mono tracking-widest hover:bg-green-500/10 transition-all">
                        {">"} man phantomi_docs
                    </button>
                </div>

                <div className="mt-24 pt-12 border-t font-mono border-green-500/30 w-full text-left">
                    <div className="flex flex-wrap justify-center gap-12 text-sm text-green-500/70 tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 animate-pulse" /> {t.deployment.stats.status}</span>
                        <span>[ {t.deployment.stats.encryption} ]</span>
                        <span>[ {t.deployment.stats.nodes} ]</span>
                        <span>[ {t.deployment.stats.uptime} ]</span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}