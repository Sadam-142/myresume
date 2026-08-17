/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgDark: '#080808',
        surfaceDark: '#111111',
        surfaceDarker: '#0c0c0c',
        borderDark: 'rgba(255, 255, 255, 0.14)',
        borderHover: 'rgba(255, 255, 255, 0.3)',
        primaryText: '#F5F5F5',
        secondaryText: '#A1A1AA',
        accentBlue: '#3B82F6',
        accentCyan: '#06B6D4',
        accentViolet: '#8B5CF6',
        accentElectric: '#00F0FF',
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        logo: ['Space Grotesk', 'Sora', 'sans-serif'],
        display: ['Space Grotesk', 'Sora', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
