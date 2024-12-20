const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        cWhite: "#fdfbfb",
        cPink: "#fa6ee3",
        cBlack: "#131313",
        cGreen: "#00b96d",
        cBlue: "#008ffd"
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

