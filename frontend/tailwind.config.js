/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}",],
  // theme: {
  //   extend: {},
  // },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'custom-bg': "url('/frontend/public/bg.jpeg')",
      // },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),

  ],
}

