"use client";
import { useLanguage } from "@/hooks/useLanguage";
import clsx from "clsx";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="fixed top-8 right-8 z-50 flex gap-2 pointer-events-auto">
            <button
                onClick={() => setLanguage('fi')}
                className={clsx(
                    "px-3 py-1 text-xs font-mono border transition-all pointer-events-auto",
                    language === 'fi'
                        ? "border-toxic-green text-toxic-green bg-toxic-green/10 shadow-[0_0_10px_rgba(0,255,65,0.4)]"
                        : "border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300"
                )}
            >
                FI
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={clsx(
                    "px-3 py-1 text-xs font-mono border transition-all pointer-events-auto",
                    language === 'en'
                        ? "border-toxic-green text-toxic-green bg-toxic-green/10 shadow-[0_0_10px_rgba(0,255,65,0.4)]"
                        : "border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300"
                )}
            >
                EN
            </button>
        </div>
    );
}
