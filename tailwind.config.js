/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#475569", // slate-600 - matches your photo's professional tone
        secondary: "#64748b", // slate-500
        accent: "#3b82f6", // blue-500 for highlights
        dark: "#0f172a", // slate-900
        light: "#f8fafc", // slate-50
        'bg-gradient-start': '#f1f5f9', // slate-100
        'bg-gradient-end': '#e2e8f0', // slate-200
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        'hero-dark': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      }
    },
  },
  plugins: [],
}