/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        'regal-blue':" #03e8fc",
        'regal-red' :"#fa0730",
        'regal-purple':"#8d07fa "
        

      }
    },
  },
  plugins: [],
}

