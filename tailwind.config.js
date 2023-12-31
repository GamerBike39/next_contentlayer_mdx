/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,jsx}',
    './components/**/*.{ts,tsx,jsx}',
    './app/**/*.{ts,tsx,jsx}',
    './src/**/*.{ts,tsx,jsx}',
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        clampXl: ["clamp(2.5rem, 2.1rem + 2.4vw, 5rem)", "1.1"],
        clamp3xl: ["clamp(2.0625rem, 0.9958rem + 5.3333vw, 4.0625rem)", "1.1"],
        clamp4xl: ["clamp(5.5rem, 1.7667rem + 18.6667vw, 12.5rem)", "1.1"],
      },
      backgroundSize: {
        bgMenu: "12vmin 12vmin",
        bgMenuHover: "11vmin 11vmin",
      },
      backgroundImage: {
        "menu-pattern": "radial-gradient(rgba(255, 255, 255, 0.1) 9%, transparent 9%)",
        "lightGradient": "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%)",
        "lightGradient2": "bg-gradient-to-t from-rose-100 to-teal-100",
        "darkGradient": "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
        "darkGradient2": "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
        "darkGradient3": "bg-gradient-to-t from-gray-700 via-gray-900 to-black"
      },

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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}