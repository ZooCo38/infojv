import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-page': '#0C0C0C',
        'bg-card': '#FFF4F3',
        'bg-card-white': '#FFFFFF',
        'bg-card-mint': '#C9F9E3',
        'accent': '#53E1A1',
        'accent-dark': '#3CB381',
        'text-primary': '#000000',
        'text-secondary': '#555555',
        'text-muted': '#888888',
        'text-on-dark': '#FFFFFF',
        'border-light': '#E5E5E5',
        'border-dark': '#2A2A2A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'sm': '12px',
        'md': '20px',
        'lg': '24px',
        'xl': '32px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};
export default config;
