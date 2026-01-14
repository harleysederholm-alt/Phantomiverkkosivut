'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export default function UserTestimonialsSection() {
    const { language } = useLanguage();
    const t = translations[language].userTestimonials;

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
                    <p className="text-green-500/70 font-mono text-lg">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="terminal-window p-6 hover:border-green-400 transition-colors"
                        >
                            <div className="flex flex-col h-full">
                                {/* Quote */}
                                <div className="flex-grow mb-6">
                                    <span className="text-4xl text-green-500/30 font-serif">&ldquo;</span>
                                    <p className="text-green-500/80 font-mono text-sm leading-relaxed -mt-4 pl-6">
                                        {testimonial.quote}
                                    </p>
                                </div>

                                {/* Author */}
                                <div className="flex items-center justify-between border-t border-green-500/20 pt-4">
                                    <div>
                                        <div className="text-green-400 font-mono font-bold text-sm">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-green-500/50 font-mono text-xs">
                                            {testimonial.location}
                                        </div>
                                    </div>
                                    {testimonial.verified && (
                                        <div className="flex items-center gap-1 text-green-500 font-mono text-xs">
                                            <span>✓</span>
                                            <span>VERIFIED</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
