"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// A premium abstract visual: animated data rings + floating metric cards
// representing the "stuck in orbit" gravity trap metaphor.

const gravityItems = [
    { label: "Revenue Plateau", icon: "solar:chart-square-bold-duotone", value: "+12% YoY", color: "text-red-400", borderColor: "border-red-500/20" },
    { label: "Founder Overload", icon: "solar:user-bold-duotone", value: "80 hr/wk", color: "text-orange-400", borderColor: "border-orange-500/20" },
    { label: "Talent Exits", icon: "solar:arrow-right-up-bold-duotone", value: "×3 turnover", color: "text-yellow-400", borderColor: "border-yellow-500/20" },
    { label: "Margin Squeeze", icon: "solar:money-bag-bold-duotone", value: "−4% quarterly", color: "text-red-400", borderColor: "border-red-500/20" },
];

export default function Problem() {
    return (
        <section id="problem" className="py-28 bg-[#0e0e0e] relative overflow-hidden">
            {/* Subtle dot grid */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* ── Left: copy ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#eb5e28]"
                                style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}>
                                <Icon icon="solar:danger-triangle-bold-duotone" className="w-4 h-4" />
                                The Gravity Trap
                            </span>
                            <h2
                                className="font-bold leading-tight"
                                style={{ fontFamily: "'Supreme', system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}
                            >
                                The "Success Trap":{" "}
                                <br />
                                <span style={{
                                    background: "linear-gradient(135deg, #eb5e28, #f4a261)",
                                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                                }}>why you're stuck</span>{" "}
                                in a comfortable orbit.
                            </h2>
                        </div>

                        <div className="space-y-5 text-lg leading-relaxed" style={{ fontFamily: "'Satoshi', system-ui, sans-serif", color: "rgba(255,255,255,0.55)" }}>
                            <p>
                                Most growth-stage companies hit a gravitational wall. You have product-market fit, a team, and revenue — but every new dollar of growth requires exponential effort.
                            </p>
                            <p>
                                Your margins are squeezing. You're still making every decision.
                                <span className="text-white font-semibold"> You don't need to pedal faster. You need a fundamentally different engine.</span>
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            {[
                                { value: "87%", label: "of founders feel trapped past $1M", icon: "solar:chart-2-bold-duotone" },
                                { value: "10x", label: "potential unlocked by correct repositioning", icon: "solar:rocket-2-bold-duotone" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="rounded-2xl border border-white/8 bg-[#161616] p-5"
                                >
                                    <Icon icon={stat.icon} className="w-5 h-5 text-[#eb5e28] mb-2" />
                                    <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Supreme', system-ui, sans-serif" }}>{stat.value}</div>
                                    <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Satoshi', system-ui, sans-serif" }}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: animated gravity visual ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="relative h-[480px] w-full flex items-center justify-center"
                    >
                        {/* Orbital rings  */}
                        {[340, 240, 150].map((size, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full border"
                                style={{
                                    width: size, height: size,
                                    borderColor: `rgba(235,94,40,${0.08 + i * 0.08})`,
                                    animation: `${i % 2 === 0 ? "orbit-spin" : "orbit-spin-reverse"} ${30 - i * 7}s linear infinite`,
                                    top: "50%", left: "50%",
                                    transform: "translate(-50%,-50%)",
                                }}
                            />
                        ))}

                        {/* Center "stuck" core */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center"
                                style={{
                                    background: "radial-gradient(circle, rgba(235,94,40,0.25) 0%, rgba(14,14,14,0.9) 70%)",
                                    border: "1.5px solid rgba(235,94,40,0.35)",
                                    boxShadow: "0 0 60px rgba(235,94,40,0.2), 0 0 120px rgba(235,94,40,0.08)",
                                }}
                            >
                                <Icon icon="solar:user-bold-duotone" className="w-8 h-8 text-[#eb5e28]" />
                            </div>
                            <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#eb5e28]/70"
                                style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}>
                                Stuck in orbit
                            </span>
                        </div>

                        {/* Floating gravity problem cards — positioned around the circle */}
                        {gravityItems.map((item, i) => {
                            const angles = [315, 45, 225, 135]; // top-right, top-right, bottom-left, bottom-left
                            const angle = (angles[i] * Math.PI) / 180;
                            const radius = 175;
                            const cx = 50 + (radius / 4.8) * Math.cos(angle);
                            const cy = 50 + (radius / 4.8) * Math.sin(angle);
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.12 }}
                                    className={`absolute rounded-xl border ${item.borderColor} bg-[#161616]/90 backdrop-blur-sm p-3 min-w-[140px]`}
                                    style={{
                                        left: `${cx}%`,
                                        top: `${cy}%`,
                                        transform: "translate(-50%, -50%)",
                                        animation: `float-up ${3.5 + i * 0.8}s ease-in-out infinite ${i * 0.5}s`,
                                    }}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <Icon icon={item.icon} className={`w-4 h-4 ${item.color}`} />
                                        <span className="text-xs text-white/50" style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}>{item.label}</span>
                                    </div>
                                    <div className={`text-sm font-bold ${item.color}`} style={{ fontFamily: "'Supreme', system-ui, sans-serif" }}>{item.value}</div>
                                </motion.div>
                            );
                        })}

                        {/* Radial glow behind the visual */}
                        <div
                            className="absolute rounded-full pointer-events-none"
                            style={{
                                width: 400, height: 400,
                                background: "radial-gradient(circle, rgba(235,94,40,0.06) 0%, transparent 70%)",
                                top: "50%", left: "50%",
                                transform: "translate(-50%,-50%)",
                            }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
