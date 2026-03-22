/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a1628',
        'accent': '#1e40af',
        'accent-light': '#3b82f6',
        'orange': '#f97316',
        'cyan': '#06b6d4',
        'surface': '#f8fafc',
        'surface-alt': '#f1f5f9',
        'border': '#e2e8f0',
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
