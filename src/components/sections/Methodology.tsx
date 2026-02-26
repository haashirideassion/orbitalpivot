"use client";

import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import { useRef } from "react";

const pillars = [
    {
        number: "01",
        title: "The Growth Vector",
        focus: "Speed vs. Scale",
        copy: "Shift from linear, headcount-dependent growth to exponential, asset-leveraged scaling. We decouple your revenue from your effort.",
        icon: "solar:chart-2-bold-duotone",
        detail: "Revenue systems · Channel engineering · Leverage architecture",
    },
    {
        number: "02",
        title: "The Operational Core",
        focus: "Founder Gravity",
        copy: "Move from 'Founder-led chaos' to 'System-led precision.' We build intelligent delegation frameworks that allow you to step back from daily ops.",
        icon: "solar:settings-bold-duotone",
        detail: "Decision hierarchies · SOPs · Leadership pipeline",
    },
    {
        number: "03",
        title: "The Competitive Edge",
        focus: "Market Gravity",
        copy: "Stop competing on features and price. We redefine your market positioning to turn you into the uncontested 'Category King.'",
        icon: "solar:crown-bold-duotone",
        detail: "Category design · Narrative strategy · Moat building",
    },
    {
        number: "04",
        title: "The Leadership Horizon",
        focus: "Strategic Thrust",
        copy: "Shift your focus from reacting to today's fires to shaping the market 18 months from now.",
        icon: "solar:telescope-bold-duotone",
        detail: "Vision architecture · Board cadence · Strategic foresight",
    },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-8%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
            className="group relative flex flex-col gap-8 rounded-2xl border border-white/6 bg-[#121212] p-10 hover:border-[#eb5e28]/30 transition-colors duration-300 min-h-[340px]"
        >
            {/* Number + Icon row */}
            <div className="flex items-start justify-between">
                {/* Large icon box */}
                <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                        background: "linear-gradient(135deg, rgba(235,94,40,0.18) 0%, rgba(235,94,40,0.06) 100%)",
                        border: "1px solid rgba(235,94,40,0.25)",
                        boxShadow: "0 0 30px rgba(235,94,40,0.1)",
                    }}
                >
                    <Icon icon={pillar.icon} className="w-11 h-11 text-[#eb5e28]" />
                </div>

                {/* Step number — large, ghosted */}
                <span
                    className="text-[56px] font-bold leading-none select-none"
                    style={{
                        fontFamily: "'Supreme', system-ui, sans-serif",
                        color: "rgba(235,94,40,0.12)",
                        letterSpacing: "-0.04em",
                    }}
                >
                    {pillar.number}
                </span>
            </div>

            {/* Focus label */}
            <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#eb5e28", fontFamily: "'Satoshi', system-ui, sans-serif" }}
            >
                {pillar.focus}
            </p>

            {/* Title */}
            <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Supreme', system-ui, sans-serif", letterSpacing: "-0.025em", fontSize: "1.5rem" }}
            >
                {pillar.title}
            </h3>

            {/* Body copy */}
            <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Satoshi', system-ui, sans-serif" }}
            >
                {pillar.copy}
            </p>

            {/* Detail tags */}
            <div className="mt-auto pt-4 border-t border-white/6">
                <p
                    className="text-xs"
                    style={{ color: "rgba(235,94,40,0.6)", fontFamily: "'Satoshi', system-ui, sans-serif" }}
                >
                    {pillar.detail}
                </p>
            </div>

            {/* Hover glow corner */}
            <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(circle at top right, rgba(235,94,40,0.08), transparent 70%)" }}
            />
        </motion.div>
    );
}

export default function Methodology() {
    return (
        <section id="methodology" className="py-36 bg-[#0e0e0e] relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-[#eb5e28]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto">
                {/* Section header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <span className="w-8 h-px bg-[#eb5e28]/60" />
                        <span
                            className="text-xs font-bold uppercase tracking-[0.25em] text-[#eb5e28]"
                            style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}
                        >
                            The 4-Pillar Framework
                        </span>
                        <span className="w-8 h-px bg-[#eb5e28]/60" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-bold"
                        style={{
                            fontFamily: "'Supreme', system-ui, sans-serif",
                            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                        }}
                    >
                        How we engineer
                        <br />
                        <span style={{ color: "rgba(255,255,255,0.55)" }}>
                            the 10x leap.
                        </span>
                    </motion.h2>
                </div>

                {/* 2×2 card grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <PillarCard key={index} pillar={pillar} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
