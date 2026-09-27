import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#dff3ff',
          200: '#bde8ff',
          300: '#8ad4ff',
          400: '#4ab8ff',
          500: '#1a93ff',
          600: '#0f73d6',
          700: '#1059a8',
          800: '#134c87',
          900: '#163f6d',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(74, 184, 255, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
