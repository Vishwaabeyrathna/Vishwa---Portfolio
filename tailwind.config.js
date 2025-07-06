/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'violet-primary': '#7C3AED',
        'violet-secondary': '#A78BFA',
        'white-bg': '#FFFFFF',
        'dark-bg': '#1F2937',
        'dark-secondary': '#374151',
        'gray-text': '#D1D5DB',
        'accent': '#F472B6',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-violet': 'linear-gradient(135deg, #7C3AED, #A78BFA)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'none': 'none',
        'glass': '10px', // Define blur value for backdrop-blur-glass
      },
    },
  },
  plugins: [],
};