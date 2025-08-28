/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        inter: 'var(--font-inter)',
      },
      colors: {
        yellow: {
          55: 'var(--color-yellow-55)',
          60: 'var(--color-yellow-60)',
          70: 'var(--color-yellow-70)',
          80: 'var(--color-yellow-80)',
          90: 'var(--color-yellow-90)',
          95: 'var(--color-yellow-95)',
          97: 'var(--color-yellow-97)',
          99: 'var(--color-yellow-99)',
        },
        dark: {
          8: 'var(--color-dark-08)',
          10: 'var(--color-dark-10)',
          15: 'var(--color-dark-15)',
          20: 'var(--color-dark-20)',
          25: 'var(--color-dark-25)',
          30: 'var(--color-dark-30)',
          35: 'var(--color-dark-35)',
          40: 'var(--color-dark-40)',
        },
        grey: {
          50: 'var(--color-grey-50)',
          60: 'var(--color-grey-60)',
          70: 'var(--color-grey-70)',
          80: 'var(--color-grey-80)',
          90: 'var(--color-grey-90)',
          95: 'var(--color-grey-95)',
          97: 'var(--color-grey-97)',
          99: 'var(--color-grey-99)',
        },
      },
    },
  },
  plugins: [],
};
