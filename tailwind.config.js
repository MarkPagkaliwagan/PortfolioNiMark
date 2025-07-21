// tailwind.config.js
module.exports = {
  darkMode: 'class', // ✅ important!
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        rotateBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'spin-border': 'rotateBorder 6s linear infinite',
        slide: 'scroll 40s linear infinite', // 🌀 infinite left scroll
      },
    },
  },
  plugins: [],
};
