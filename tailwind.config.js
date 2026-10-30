/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          void: '#0A0A14',
          accent: '#7B61FF',
          accentLight: '#9D8CFF',
          cyan: '#00F0FF',
          ghost: '#F0EFF4',
          graphite: '#18181B',
          card: '#12121F',
          cardBorder: 'rgba(123, 97, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        dramatic: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      boxShadow: {
        'neon': '0 0 30px -5px rgba(123, 97, 255, 0.45)',
        'neon-lg': '0 0 50px -10px rgba(123, 97, 255, 0.6)',
        'neon-cyan': '0 0 30px -5px rgba(0, 240, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
