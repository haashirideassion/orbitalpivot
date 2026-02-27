"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useBooking } from "@/contexts/BookingContext";

// ⚠️ Replace this with your actual Calendly scheduling link
const CALENDLY_URL = "https://calendly.com/orbitalpivot/diagnostic-call";

export default function CalendlyModal() {
    const { isOpen, closeBooking } = useBooking();

    // Close on Escape key
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeBooking(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [closeBooking]);

    // Prevent scrolling while modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
                        onClick={closeBooking}
                    />

                    {/* Modal panel */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="relative w-full max-w-3xl bg-[#161616] rounded-2xl border border-white/10 shadow-2xl overflow-hidden pointer-events-auto"
                            style={{ height: "min(85vh, 720px)" }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#eb5e28]/15 border border-[#eb5e28]/25 flex items-center justify-center">
                                        <Icon icon="solar:phone-called-bold-duotone" className="w-4 h-4 text-[#eb5e28]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white text-sm" style={{ fontFamily: "'Supreme', system-ui, sans-serif" }}>
                                            Book Your Orbital Diagnostic Call
                                        </p>
                                        <p className="text-xs text-white/40" style={{ fontFamily: "'Satoshi', system-ui, sans-serif" }}>
                                            Complimentary 45-minute strategy session
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={closeBooking}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-all"
                                    aria-label="Close"
                                >
                                    <Icon icon="solar:close-bold-duotone" className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Calendly iframe */}
                            <iframe
                                src={`${CALENDLY_URL}?embed_type=Inline&hide_gdpr_banner=1&background_color=161616&text_color=f5f5f5&primary_color=eb5e28`}
                                className="w-full h-full"
                                style={{ height: "calc(100% - 65px)" }}
                                frameBorder="0"
                                title="Book a call"
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
