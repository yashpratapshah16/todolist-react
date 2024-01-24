/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#527853",
        "sec1":"#F9E8D9",
        "sec2":"#F7B787",
        "sec3":"#EE7214",
      }
    },
  },
  plugins: [],
}