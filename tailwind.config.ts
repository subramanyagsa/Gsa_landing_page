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
      boxShadow: { // Custom box shadows for the glow effect
        'soft-glow': '0 0 10px rgba(180, 190, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.05)',
        'soft-glow-mid': '0 0 20px rgba(180, 190, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.1)',
        'soft-glow-hover': '0 0 25px rgba(180, 190, 255, 0.6), 0 0 50px rgba(255, 255, 255, 0.15)',
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
        "gradient-shift": {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "soft-glow-pulse": { // New keyframe for the pulsing glow, with explicit shadow values
          "0%, 100%": { boxShadow: "0 0 10px rgba(180, 190, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.05)" },
          "50%": { boxShadow: "0 0 20px rgba(180, 190, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 3s linear infinite",
        "soft-glow-pulse": "soft-glow-pulse 7s ease-in-out infinite", // 7 seconds for a slow, subtle pulse
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}