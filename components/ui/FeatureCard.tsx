"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

interface FeatureCardProps {
    title: string;
    description: string;
    tech: string; // e.g., "ECDH P-521"
    align?: "left" | "right";
    index: number;
}

export default function FeatureCard({ title, description, tech, align = "left", index }: FeatureCardProps) {

    return (
        <motion.div
            initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={clsx(
                "w-full md:w-1/2 lg:w-1/3 p-6 terminal-window relative overflow-hidden group transition-colors",
                align === "right" ? "ml-auto text-right" : "mr-auto text-left"
            )}
        >
            {/* Scanline Overlay (Native) */}
            <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

            {/* Tech Header */}
            <div className="flex items-center gap-2 mb-4">
                <div className={clsx("w-3 h-3 bg-green-500 animate-pulse", align === "right" && "order-2")} />
                <span className={clsx("font-display text-sm tracking-widest text-green-500 uppercase", align === "right" && "order-1")}>
                    [{tech}]
                </span>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-white font-mono uppercase tracking-tighter group-hover:text-shadow-glow transition-all">
                {title}
            </h3>

            <p className="text-green-500/80 text-sm font-mono leading-relaxed">
                {description}
            </p>

            {/* Animated Border Corner */}
            <div className={clsx(
                "absolute top-0 w-16 h-16 border-t-2 border-l-2 border-toxic-green/0 group-hover:border-toxic-green/40 transition-all duration-500",
                align === "left" ? "left-0" : "right-0 rotate-90"
            )} />
        </motion.div>
    )
}