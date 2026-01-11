module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(37, 16%, 86%)",
        input: "hsl(37, 16%, 86%)",
        ring: "hsl(160, 25%, 42%)",
        background: "hsl(37, 42%, 90%)",
        foreground: "hsl(216, 25%, 20%)",
        primary: {
          DEFAULT: "hsl(37, 42%, 90%)",
          foreground: "hsl(216, 25%, 20%)",
        },
        secondary: {
          DEFAULT: "hsl(216, 30%, 22%)",
          foreground: "hsl(37, 50%, 96%)",
        },
        tertiary: {
          DEFAULT: "hsl(160, 15%, 42%)",
          foreground: "hsl(37, 50%, 96%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "hsl(216, 25%, 20%)",
        },
        success: "hsl(148, 35%, 35%)",
        warning: "hsl(36, 85%, 45%)",
        muted: {
          DEFAULT: "hsl(37, 24%, 94%)",
          foreground: "hsl(37, 5%, 40%)",
        },
        accent: {
          DEFAULT: "hsl(160, 25%, 42%)",
          foreground: "hsl(37, 50%, 96%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(37, 50%, 96%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "hsl(216, 25%, 20%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "hsl(216, 25%, 20%)",
        },
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(37, 24%, 94%)",
          200: "hsl(37, 16%, 86%)",
          300: "hsl(37, 10%, 76%)",
          400: "hsl(37, 8%, 64%)",
          500: "hsl(37, 6%, 55%)",
          600: "hsl(37, 5%, 40%)",
          700: "hsl(37, 5%, 30%)",
          800: "hsl(37, 5%, 20%)",
          900: "hsl(37, 5%, 10%)",
        },
      },
      fontFamily: {
        sans: ["Figtree", '"Work Sans"', "sans-serif"],
        body: ['"Work Sans"', "sans-serif"],
        label: ['"DM Sans"', "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(37, 42%, 90%) 0%, hsl(216, 30%, 22%) 100%)',
        'gradient-2': 'linear-gradient(160deg, hsl(160, 15%, 42%) 0%, hsl(216, 30%, 22%) 90%)',
        'button-border-gradient': 'linear-gradient(45deg, hsl(160, 25%, 50%) 0%, hsl(216, 30%, 40%) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
