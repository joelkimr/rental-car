import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        slider: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(calc(-100% / var(--slider-total-clones)))'
          }
        },
        'dot-pulse': {
          '0%,100%': {
            transform: 'Scale(1)',
            opacity: '1'
          },
          '50%': {
            transform: 'scale(1.25)',
            opacity: '0.3'
          }
        }
      },
      animation: {
        slider: 'slider 56s linear infinite',
        'dot-pulse': 'dot-pulse 1s infinite ease-in-out'
      },

      
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
