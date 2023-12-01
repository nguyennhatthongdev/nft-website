/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      spacing: {
        35: '35px',
      },
      colors: {
        gray33: "#333",
        primary: "#1E50FF",
        yellow: "#FFC935",
        purple: "#AA00FF",
        dark: "#020005",
        dark2: "#131528",
        dark3: "#192243",
        dark4: "#05113B",
        grey: "#B1B5C1",
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'be': ['Be Vietnam Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

