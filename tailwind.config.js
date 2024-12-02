/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend:{
      color:{
        blue:{
          700:"#146eb4"
        }
      }

    },
  },
  plugins: [],
}

