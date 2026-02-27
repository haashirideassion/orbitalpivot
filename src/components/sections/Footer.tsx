"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useBooking } from "@/contexts/BookingContext";
import OrbitalPivotLogo from "@/components/OrbitalPivotLogo";

export default function Footer() {
    const { openBooking } = useBooking();

    return (
        <footer className="pt-24 pb-8 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#eb5e28]/8 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-20 space-y-8"
                >
                    <h2 className="font-bold tracking-tight leading-tight"
                        style={{ fontFamily: "'Supreme', system-ui, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em" }}>
                        Stop drifting. <br className="hidden md:block" />
                        <span style={{
                            background: "linear-gradient(135deg, #eb5e28, #f4a261)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                        }}>
                            Start driving.
                        </span>
                    </h2>

                    <p className="text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Satoshi', system-ui, sans-serif" }}>
                        The market won't wait for you to figure out how to scale. If you are a Founder doing over{" "}
                        <span className="text-white font-semibold">$1 Million</span> in revenue and feel stuck, let's talk.
                    </p>

                    <div className="pt-4 space-y-4">
                        <Button size="lg" onClick={openBooking}
                            className="rounded-full h-16 px-10 text-lg font-bold w-full max-w-md"
                            style={{
                                background: "linear-gradient(135deg, #eb5e28, #c94a18)",
                                boxShadow: "0 0 40px rgba(235,94,40,0.3)",
                                fontFamily: "'Satoshi', system-ui, sans-serif"
                            }}>
                            <Icon icon="solar:calendar-bold-duotone" className="w-6 h-6 mr-2" />
                            Book Your Orbital Diagnostic Call
                        </Button>
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Satoshi', system-ui, sans-serif" }}>
                            A complimentary 45-minute strategy session for qualified founders.
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/8 text-sm"
                    style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Satoshi', system-ui, sans-serif" }}>
                    <OrbitalPivotLogo size="sm" />

                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-[#eb5e28] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#eb5e28] transition-colors">Contact</Link>
                    </div>

                    <div>© {new Date().getFullYear()} Orbital Pivot</div>
                </div>
            </div>
        </footer>
    );
}
