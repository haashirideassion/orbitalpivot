"use client";
import { useId } from "react";
// OrbitalPivotLogo — faithful SVG recreation of the Orbital Pivot brand logo.

interface OrbitalPivotLogoProps {
    /** "sm" = compact horizontal, "lg" = full stacked, default = "sm" */
    size?: "sm" | "lg";
    /** Render just the orbital sphere icon mark */
    iconOnly?: boolean;
    className?: string;
}

/** The orbital sphere icon — filled circle with a clipped diagonal band */
function OrbitalSphere({ r = 50, color = "#eb5e28" }: { r?: number; color?: string }) {
    const uid = useId(); // guaranteed unique per instance — no clipPath ID collisions
    const clipId = `op-clip-${uid.replace(/:/g, "")}`;
    const bw = r * 0.28;

    return (
        <svg
            width={r * 2}
            height={r * 2}
            viewBox={`0 0 ${r * 2} ${r * 2}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
        >
            <defs>
                <clipPath id={clipId}>
                    <circle cx={r} cy={r} r={r - 1} />
                </clipPath>
            </defs>
            <circle cx={r} cy={r} r={r - 1} fill={color} />
            <path
                d={`M ${r * 0.05} ${r * 1.55} C ${r * 0.35} ${r * 1.25}, ${r * 0.65} ${r * 0.75}, ${r * 1.95} ${r * 0.45}`}
                stroke="rgba(255,255,255,0.88)"
                strokeWidth={bw}
                strokeLinecap="round"
                fill="none"
                clipPath={`url(#${clipId})`}
            />
        </svg>
    );
}

export default function OrbitalPivotLogo({
    size = "sm",
    iconOnly = false,
    className = "",
}: OrbitalPivotLogoProps) {
    const brand = "#eb5e28";
    const fontStyle = {
        fontFamily: "'Supreme', system-ui, sans-serif",
        fontWeight: 700,
        letterSpacing: "-0.02em",
        color: "white",
    };

    if (iconOnly) {
        return (
            <div className={className}>
                <OrbitalSphere r={20} color={brand} />
            </div>
        );
    }

    if (size === "lg") {
        // Full stacked lockup — matches the two-line brand logo
        // "orbital" first line with sphere replacing 'o'
        // small arrow cursor between lines
        // "pivot" second line with sphere replacing 'p'
        const sphereR = 36;
        const fontSize = 68;
        const lineH = fontSize * 1.05;

        return (
            <svg
                className={className}
                viewBox={`0 0 480 ${lineH * 2 + 28}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="480"
                style={{ display: "block" }}
            >
                <defs>
                    <clipPath id="sphere-clip-lg-1">
                        <circle cx={sphereR} cy={sphereR} r={sphereR - 1} />
                    </clipPath>
                    <clipPath id="sphere-clip-lg-2">
                        <circle cx={sphereR} cy={lineH + 28 + sphereR} r={sphereR - 1} />
                    </clipPath>
                </defs>

                {/* ── Line 1: "orbital" ── */}
                {/* Sphere (replaces 'o') */}
                <circle cx={sphereR} cy={sphereR} r={sphereR - 1} fill={brand} />
                <path
                    d={`M ${sphereR * 0.07} ${sphereR * 1.55} C ${sphereR * 0.35} ${sphereR * 1.25}, ${sphereR * 0.65} ${sphereR * 0.75}, ${sphereR * 1.93} ${sphereR * 0.45}`}
                    stroke="rgba(255,255,255,0.88)"
                    strokeWidth={sphereR * 0.28}
                    strokeLinecap="round"
                    fill="none"
                    clipPath="url(#sphere-clip-lg-1)"
                />
                {/* "rbital" text */}
                <text
                    x={sphereR * 2 + 6}
                    y={sphereR * 1.55}
                    style={{ ...fontStyle, fontSize, fill: "white" }}
                >
                    rbital
                </text>

                {/* ── Cursor arrow between lines ── */}
                {/* Small arrowhead cursor — positioned between the two lines */}
                <polygon
                    points={`${sphereR - 10},${lineH + 4} ${sphereR + 4},${lineH + 14} ${sphereR - 10},${lineH + 24}`}
                    fill="black"
                    transform={`rotate(-5, ${sphereR - 3}, ${lineH + 14})`}
                />

                {/* ── Line 2: "pivot" ── */}
                {/* The 'p' descender half-sphere — larger, shows only the upper half */}
                <clipPath id="sphere-clip-lg-2-half">
                    <rect x={0} y={lineH + 28} width={sphereR * 2} height={sphereR * 2} />
                </clipPath>
                <circle cx={sphereR} cy={lineH + 28 + sphereR} r={sphereR - 1} fill={brand} />
                <path
                    d={`M ${sphereR * 0.07} ${lineH + 28 + sphereR * 1.55} C ${sphereR * 0.35} ${lineH + 28 + sphereR * 1.25}, ${sphereR * 0.65} ${lineH + 28 + sphereR * 0.75}, ${sphereR * 1.93} ${lineH + 28 + sphereR * 0.45}`}
                    stroke="rgba(255,255,255,0.88)"
                    strokeWidth={sphereR * 0.28}
                    strokeLinecap="round"
                    fill="none"
                    clipPath="url(#sphere-clip-lg-2)"
                />
                {/* "ivot" text */}
                <text
                    x={sphereR * 2 + 6}
                    y={lineH + 28 + sphereR * 1.55}
                    style={{ ...fontStyle, fontSize, fill: "white" }}
                >
                    ivot
                </text>
            </svg>
        );
    }

    // Default "sm" — navbar lockup: sphere + stacked two-line text
    const sphereR = 22;
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <OrbitalSphere r={sphereR} color={brand} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, gap: 1 }}>
                <span
                    style={{
                        ...fontStyle,
                        fontSize: 15,
                        letterSpacing: "-0.01em",
                        color: brand,
                        textTransform: "lowercase",
                    }}
                >
                    orbital
                </span>
                <span
                    style={{
                        ...fontStyle,
                        fontSize: 15,
                        letterSpacing: "-0.01em",
                        color: "white",
                        textTransform: "lowercase",
                    }}
                >
                    pivot
                </span>
            </div>
        </div>
    );
}
