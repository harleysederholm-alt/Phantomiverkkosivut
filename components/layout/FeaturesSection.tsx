"use client";
import FeatureCard from "@/components/ui/FeatureCard";
import { useLanguage } from "@/hooks/useLanguage";

export default function FeaturesSection() {
    const { t } = useLanguage();

    return (
        <section className="min-h-[300vh] w-full relative z-10 py-48 flex flex-col justify-center">
            <div className="container mx-auto px-4 space-y-96">
                {t.features.items.map((feature, idx) => (
                    <FeatureCard
                        key={idx}
                        index={idx}
                        title={feature.title}
                        description={feature.description}
                        tech={feature.tech}
                        align={idx % 2 === 0 ? "left" : "right"}
                    />
                ))}
            </div>
        </section>
    )
}