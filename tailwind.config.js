/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0CA6A6',
        secondary: '#04364A',
        accent: '#E6F7F7',
        background: '#F8F9FA',
        success: '#2ECC71',
        warning: '#F39C12',
        error: '#FF6B6B',
        info: '#3498DB',
        'text-primary': '#2D2D2D',
        'text-secondary': '#6B7280',
        'text-light': '#A0AEC0',
      },
    },
  },
  plugins: [],
}
