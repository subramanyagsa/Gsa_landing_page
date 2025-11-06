/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        // Distinctly purplish conic gradient for the outer stroke glow
        'conic-gradient-purple-blue': 'conic-gradient(from var(--angle, 0deg), #a78bfa 0%, #8b5cf6 15%, #8b5cf6 40%, #a78bfa 50%, #8b5cf6 65%, #8b5cf6 90%, #a78bfa 100%)',
        // New blue gradient for pain points section
        'conic-gradient-blue': 'conic-gradient(from var(--angle, 0deg), #a9cbfd 0%, #3b82f6 15%, #3b82f6 40%, #a9cbfd 50%, #3b82f6 65%, #3b82f6 90%, #a9cbfd 100%)',
        'radial-gradient-subtle': 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)', // Added for SocialProofSection
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-scroll": {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "border-spin": {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
        "marquee": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        "marquee-up": {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-50%)' },
        },
        "marquee-down": {
          from: { transform: 'translateY(-50%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-scroll": "gradient-scroll 4s linear infinite",
        "border-spin": "border-spin 7s linear infinite", // Using this for the outer stroke glow
        "marquee": "marquee 60s linear infinite",
        "marquee-up": "marquee-up 60s linear infinite",
        "marquee-down": "marquee-down 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}