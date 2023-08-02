/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
      fontFamily: {
      inter: ['inter', 'sans-serif'],
      kaisei: ['Kaisei Decol', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary-100":" #235f8d",
        "primary-200":"#0B3E64",
        "primary-300": " #093252",
        "secondary-100": "#f9f9f9",
        "tertiary-100": "#222",
        "tertiary-200": "#444",
        "tertiary-300": "#999",
      },
     
    },
  },
  plugins: [],
}