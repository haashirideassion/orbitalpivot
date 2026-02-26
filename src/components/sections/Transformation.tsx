"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const comparison = [
    { asIs: "Incremental Growth (10-20%)", toBe: "Exponential Scaling (10x)" },
    { asIs: "Founder is the Bottleneck", toBe: "Systems are Autonomous" },
    { asIs: "Competing on Price/Features", toBe: "Dominating as Category King" },
    { asIs: "Reactive 'Firefighting'", toBe: "Strategic Market Shaping" },
];

export default function Transformation() {
    return (
        <section className="py-28 bg-[#111111] relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/60 mb-6"
                    >
                        <Icon icon="solar:arrow-right-up-bold-duotone" className="w-4 h-4 text-[#eb5e28]" />
                        The Shift
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-montserrat mb-4"
                    >
                        Defining Your <span className="text-[#eb5e28]">New Orbit.</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto rounded-2xl border border-white/8 overflow-hidden bg-[#161616]"
                >
                    {/* Header row */}
                    <div className="grid grid-cols-2 border-b border-white/8">
                        <div className="p-6 flex items-center gap-2">
                            <Icon icon="solar:danger-circle-bold-duotone" className="w-5 h-5 text-red-400 shrink-0" />
                            <h3 className="font-bold text-white/50 font-montserrat text-sm uppercase tracking-wider">Current Orbit (As-Is)</h3>
                        </div>
                        <div className="p-6 flex items-center gap-2 bg-[#eb5e28]/5 border-l border-white/8">
                            <Icon icon="solar:star-bold-duotone" className="w-5 h-5 text-[#eb5e28] shrink-0" />
                            <h3 className="font-bold text-[#eb5e28] font-montserrat text-sm uppercase tracking-wider">New 10x Orbit (To-Be)</h3>
                        </div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {comparison.map((row, index) => (
                            <div key={index} className="grid grid-cols-2 hover:bg-white/[0.015] transition-colors">
                                <div className="p-5 flex items-center gap-3 text-white/50">
                                    <Icon icon="solar:close-circle-bold-duotone" className="w-5 h-5 text-red-400/70 shrink-0" />
                                    <span className="text-sm md:text-base">{row.asIs}</span>
                                </div>
                                <div className="p-5 flex items-center gap-3 bg-[#eb5e28]/5 border-l border-white/8">
                                    <Icon icon="solar:check-circle-bold-duotone" className="w-5 h-5 text-[#eb5e28] shrink-0" />
                                    <span className="text-sm md:text-base text-white font-medium">{row.toBe}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
