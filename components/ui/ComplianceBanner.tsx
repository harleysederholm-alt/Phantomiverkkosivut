"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export default function ComplianceBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        // Check local storage
        const consent = localStorage.getItem('phantomi-consent');
        if (!consent) setIsVisible(true);
    }, []);

    const accept = () => {
        localStorage.setItem('phantomi-consent', 'true');
        setIsVisible(false);
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="fixed bottom-4 right-4 z-50 max-w-sm font-mono"
                >
                    <div className="bg-black/90 p-4 border border-amber-500 shadow-[0_0_15px_rgba(255,176,0,0.3)]">
                        <h3 className="text-amber-500 mb-2 uppercase tracking-widest text-xs flex items-center gap-2">
                            <span className="w-2 h-2 bg-amber-500 animate-pulse" />
                            {">"} SYSTEM_NOTICE
                        </h3>
                        <p className="mb-4 text-amber-500/80 text-xs leading-relaxed">
                            {t.compliance.text}
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={accept}
                                className="flex-1 bg-amber-500 text-black font-bold py-2 px-3 hover:bg-amber-400 transition-colors uppercase text-xs tracking-wider"
                            >
                                {">"} {t.compliance.accept}
                            </button>
                            <button
                                onClick={accept}
                                className="flex-1 border border-amber-500/50 text-amber-500 py-2 px-3 hover:bg-amber-500/10 transition-colors uppercase text-xs tracking-wider"
                            >
                                {">"} {t.compliance.decline}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
