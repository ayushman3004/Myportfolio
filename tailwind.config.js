/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F5EFE0',
          300: '#EDE4CE',
          400: '#E2D3B3',
          500: '#D5C095',
        },
        parchment: {
          DEFAULT: '#F7F3EB',
          light: '#FCFAF6',
          dark: '#EFE9DD',
        },
        earth: {
          50: '#FBF8F5',
          100: '#F4EDE4',
          200: '#E9DEC9',
          300: '#D6C3A3',
          400: '#B89B73',
          500: '#9B784B',
          600: '#85623B',
          700: '#6E4E2D',
          800: '#533B23',
          900: '#3A291A',
          950: '#261B11',
        },
        cognac: {
          light: '#A07049',
          DEFAULT: '#885834',
          dark: '#6E4324',
          hover: '#7A4B29',
        },
        walnut: {
          800: '#2E2017',
          900: '#221710',
          950: '#170E0A',
        },
        gold: {
          light: '#EED688',
          DEFAULT: '#D4AF37',
          dark: '#AA8820',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'frame': '0 20px 40px -15px rgba(24, 15, 8, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
        'frame-gold': '0 25px 50px -12px rgba(18, 12, 7, 0.6), 0 0 0 2px rgba(212, 175, 55, 0.35)',
        'plaque': '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
        'card-soft': '0 10px 30px -10px rgba(58, 41, 26, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(58, 41, 26, 0.16)',
      },
      borderRadius: {
        'arch': '240px 240px 0 0',
        'arch-sm': '180px 180px 0 0',
      },
    },
  },
  plugins: [],
};
