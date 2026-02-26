"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { useBooking } from "@/contexts/BookingContext";

const CTA_IMAGE = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f450e02-c8ef-4fe7-b519-21cbb9191a19_800w.jpg";

export default function Engagement() {
    const { openBooking } = useBooking();

    return (
        <section className="py-28 relative overflow-hidden bg-[#0e0e0e]">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto rounded-3xl border border-white/10 overflow-hidden relative min-h-[380px] flex items-center"
                >
                    <div className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${CTA_IMAGE})`, filter: "brightness(0.25) saturate(0.8)" }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/85 to-transparent" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[150px] bg-[#eb5e28]/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 p-10 md:p-16 max-w-xl">
                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[#eb5e28]/15 border border-[#eb5e28]/25 mb-8">
                            <Icon icon="solar:clipboard-list-bold-duotone" className="w-7 h-7 text-[#eb5e28]" />
                        </div>

                        <h2 className="font-bold leading-tight mb-5"
                            style={{
                                fontFamily: "'Supreme', system-ui, sans-serif",
                                fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.03em"
                            }}>
                            Not sure if you're ready?{" "}
                            <span style={{
                                background: "linear-gradient(135deg, #eb5e28, #f4a261)",
                                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                            }}>
                                Let's find out together.
                            </span>
                        </h2>

                        <p className="text-lg mb-10" style={{
                            color: "rgba(255,255,255,0.55)",
                            fontFamily: "'Satoshi', system-ui, sans-serif", lineHeight: 1.7
                        }}>
                            Book a complimentary 45-minute Orbital Diagnostic Call and get a clear read on exactly what's holding your business
                            back from the 10x leap.
                        </p>

                        <Button size="lg" onClick={openBooking}
                            className="rounded-full h-14 px-8 text-base font-bold"
                            style={{
                                background: "linear-gradient(135deg, #eb5e28, #c94a18)",
                                boxShadow: "0 0 30px rgba(235,94,40,0.4)",
                                fontFamily: "'Satoshi', system-ui, sans-serif"
                            }}>
                            <Icon icon="solar:calendar-bold-duotone" className="w-5 h-5 mr-2" />
                            Book Your Diagnostic Call
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
