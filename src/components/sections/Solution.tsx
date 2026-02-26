"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Solution() {
    return (
        <section id="solution" className="py-28 bg-[#111111] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#eb5e28]/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center p-4 rounded-2xl bg-[#eb5e28]/15 border border-[#eb5e28]/20 mb-4"
                    >
                        <Icon icon="solar:rocket-2-bold-duotone" className="w-10 h-10 text-[#eb5e28]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-montserrat"
                    >
                        Enter the <span className="text-[#eb5e28]">Orbital Pivot</span> Program.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-lg text-white/50 font-medium uppercase tracking-widest"
                    >
                        A high-impact consulting engagement for Founders ready for the 10x leap.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/65 leading-relaxed"
                    >
                        Orbital Pivot is not about marginal improvements. It is a structured transformation designed to identify the "gravity anchors" holding you back and engineer the strategic thrust required to dominate your category.
                        <br /><br />
                        <span className="text-white font-semibold text-2xl">
                            We move you from a "successful local player" to a "global category king."
                        </span>
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
