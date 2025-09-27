import * as React from "react"

export function GlowingText({ text, className }: { text: string; className?: string }) {
    return (
        <>
            <div style={styles.glow} className={className}>
                {text}
            </div>
            <style>{`
                @keyframes fgdnpR {
                    0% {
                        background-position: 200% center;
                    }
                    100% {
                        background-position: -200% center;
                    }
                }
            `}</style>
        </>
    )
}

const styles = {
    glow: {
        fontSize: "23px",
        fontWeight: 600,
        fontFamily: "Inter, sans-serif",
        letterSpacing: "0.2px",
        display: "inline-block",
        background: "linear-gradient(90deg, #666 15%, #3B82F5 25%, #666 45%)",
        backgroundSize: "200% auto",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "fgdnpR 4s linear infinite",
        lineHeight: "1.4",
    } as React.CSSProperties,
}