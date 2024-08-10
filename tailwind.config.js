// const flowbite = require("flowbite-react/tailwind");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbite.plugin()],
// }


const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/flowbite-react/**/*.js"
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
  theme: {
    colors: {
      primary: {
        600: '#1CA9A6',
        700: '#18908D',
      },
    }
  }
};
