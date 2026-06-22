import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#05070F',
        'background-secondary': '#070A14',
        surface: '#0B1020',
        'surface-hover': '#111936',
        'surface-elevated': '#151D35',
        edge: 'rgba(255, 255, 255, 0.10)',
        'edge-strong': 'rgba(245, 196, 81, 0.38)',
        'edge-active': 'rgba(168, 85, 247, 0.55)',
        primary: '#F8FAFC',
        secondary: '#AAB4CB',
        muted: '#727E99',
        blue: {
          DEFAULT: '#8B5CF6',
          bright: '#F5C451',
        },
        purple: '#A855F7',
        gold: '#F5C451',
        green: '#34D399',
        danger: '#FB7185',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-manrope)', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
      },
      borderRadius: {
        card: '8px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(168,85,247,0.3), 0 18px 48px -22px rgba(168,85,247,0.55)',
        'glow-gold': '0 0 0 1px rgba(245,196,81,0.35), 0 18px 48px -22px rgba(245,196,81,0.48)',
        card: '0 24px 60px -28px rgba(0,0,0,0.85)',
      },
      opacity: {
        8: '0.08',
        12: '0.12',
        15: '0.15',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease forwards',
        pulseDot: 'pulseDot 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
