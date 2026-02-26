"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { useBooking } from "@/contexts/BookingContext";
import ParticleCanvas from "@/components/ParticleCanvas";

const HERO_BG = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d1b93c2-e14a-4733-9a59-d29d521a6027_800w.webp";

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.18 } } };
const itemVariants = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } } };

export default function Hero() {
    const { openBooking } = useBooking();

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                style={{ backgroundImage: `url(${HERO_BG})`, filter: "brightness(0.35) saturate(1.2)" }} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,transparent_0%,#0e0e0e_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0e0e0e]" />
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "256px 256px" }} />

            {/* Orbital rings */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
                {[
                    { size: 900, duration: "40s", opacity: 0.08, dir: "none" },
                    { size: 650, duration: "28s", opacity: 0.13, dir: "reverse" },
                    { size: 420, duration: "18s", opacity: 0.2, dir: "none" },
                    { size: 250, duration: "12s", opacity: 0.3, dir: "reverse" },
                ].map((r, i) => (
                    <div key={i} className="absolute rounded-full border border-[#eb5e28]"
                        style={{
                            width: r.size, height: r.size, opacity: r.opacity, top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            animation: `${r.dir === "reverse" ? "orbit-spin-reverse" : "orbit-spin"} ${r.duration} linear infinite`
                        }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#eb5e28]"
                            style={{ boxShadow: "0 0 8px #eb5e28, 0 0 24px #eb5e28" }} />
                    </div>
                ))}
                <div className="absolute rounded-full"
                    style={{
                        width: 400, height: 400, background: "radial-gradient(circle, rgba(235,94,40,0.18) 0%, transparent 70%)",
                        filter: "blur(40px)", animation: "pulse-glow 5s ease-in-out infinite", top: "50%", left: "50%", transform: "translate(-50%, -55%)"
                    }} />
            </div>

            <ParticleCanvas />

            <div className="container relative z-10 px-4 md:px-8 mx-auto pt-24">
                <motion.div className="flex flex-col items-center text-center max-w-5xl mx-auto"
                    variants={containerVariants} initial="hidden" animate="show">

                    <motion.h1 variants={itemVariants} className="font-bold tracking-tighter leading-[1.0] mb-8"
                        style={{ fontFamily: "'Supreme', system-ui, sans-serif", fontSize: "clamp(3rem, 9vw, 8rem)" }}>
                        <span className="block text-white">Is your company</span>
                        <span className="block">built for{" "}
                            <span style={{
                                background: "linear-gradient(135deg, #eb5e28 0%, #f4a261 50%, #eb5e28 100%)",
                                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                            }}>10%</span>
                            {" "}<span className="text-white/30">or</span>
                        </span>
                        <span className="block relative">
                            <span style={{
                                background: "linear-gradient(to right, #ffffff 0%, #ffffff 60%, rgba(255,255,255,0.5) 100%)",
                                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                            }}>10x scale?</span>
                            <motion.span className="absolute -bottom-3 left-0 h-[3px] rounded-full"
                                style={{ background: "linear-gradient(to right, #eb5e28, transparent)" }}
                                initial={{ width: 0 }} animate={{ width: "70%" }}
                                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }} />
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed mb-12"
                        style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}>
                        You've hit the ceiling of your current business model. What got you here won't get you to market dominance.{" "}
                        <em className="not-italic text-white/80 font-medium">It's time to break gravity and shift orbits.</em>
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <Button size="lg" onClick={openBooking}
                            className="group relative rounded-full h-14 px-10 text-base font-bold overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, #eb5e28, #c94a18)",
                                boxShadow: "0 0 40px rgba(235,94,40,0.5), 0 4px 30px rgba(0,0,0,0.5)",
                                fontFamily: "'Satoshi', system-ui, sans-serif"
                            }}>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)" }} />
                            <Icon icon="solar:calendar-bold-duotone" className="w-5 h-5 mr-2 relative z-10" />
                            <span className="relative z-10">Book Your Orbital Diagnostic Call</span>
                        </Button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-20 flex flex-col items-center gap-2 opacity-40">
                        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/60 animate-pulse" />
                        <span className="text-xs tracking-widest text-white/50 uppercase" style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}>Scroll</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
