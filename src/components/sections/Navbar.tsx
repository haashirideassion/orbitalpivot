"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useBooking } from "@/contexts/BookingContext";
import OrbitalPivotLogo from "@/components/OrbitalPivotLogo";

const navItems = [
    { label: "The Problem", href: "#problem", icon: "solar:danger-triangle-bold-duotone" },
    { label: "The Solution", href: "#solution", icon: "solar:rocket-2-bold-duotone" },
    { label: "Framework", href: "#methodology", icon: "solar:layers-bold-duotone" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { openBooking } = useBooking();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60);
            // Detect active section
            const sections = ["problem", "solution", "methodology"];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(id);
                        return;
                    }
                }
            }
            setActiveSection("");
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none"
        >
            <AnimatePresence>
                <motion.nav
                    key="navbar"
                    className="pointer-events-auto flex items-center gap-1 rounded-2xl px-2 py-2 transition-all duration-500"
                    style={{
                        background: scrolled
                            ? "rgba(16,16,16,0.85)"
                            : "rgba(16,16,16,0.4)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: scrolled
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "1px solid rgba(255,255,255,0.04)",
                        boxShadow: scrolled
                            ? "0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(235,94,40,0.08) inset"
                            : "0 2px 20px rgba(0,0,0,0.2)",
                    }}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center pl-1 pr-4 py-1 mr-1 border-r border-white/8">
                        <OrbitalPivotLogo size="sm" />
                    </Link>

                    {/* Nav items */}
                    {navItems.map((item) => {
                        const sectionId = item.href.replace("#", "");
                        const isActive = activeSection === sectionId;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 group"
                                style={{
                                    fontFamily: "'Satoshi', system-ui, sans-serif",
                                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)",
                                    background: isActive ? "rgba(235,94,40,0.1)" : "transparent",
                                }}
                            >
                                <Icon
                                    icon={item.icon}
                                    className="w-3.5 h-3.5 transition-colors"
                                    style={{ color: isActive ? "#eb5e28" : "rgba(235,94,40,0.5)" }}
                                />
                                <span className="hidden md:block group-hover:text-white transition-colors">
                                    {item.label}
                                </span>
                                {/* Active underline dot */}
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-dot"
                                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#eb5e28]"
                                        transition={{ duration: 0.25 }}
                                    />
                                )}
                            </a>
                        );
                    })}

                    {/* Divider */}
                    <div className="w-px h-5 bg-white/8 mx-1" />

                    {/* CTA */}
                    <Button
                        size="sm"
                        onClick={openBooking}
                        className="rounded-xl font-semibold text-sm px-4 h-9 relative overflow-hidden group"
                        style={{
                            background: "linear-gradient(135deg, #eb5e28, #c94a18)",
                            boxShadow: "0 0 20px rgba(235,94,40,0.3)",
                            fontFamily: "'Satoshi', system-ui, sans-serif",
                        }}
                    >
                        {/* hover shimmer */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                            style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)" }}
                        />
                        <Icon icon="solar:calendar-bold-duotone" className="w-3.5 h-3.5 mr-1.5 relative z-10" />
                        <span className="relative z-10">Book a Call</span>
                    </Button>
                </motion.nav>
            </AnimatePresence>
        </motion.div>
    );
}
