/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1200px',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      fontSize: {
        'h1textSize': '60px',
        'h2textSize': '36px',
        'title1textSize': '24px',
        'title2textSize': '18px',
        'paragraph1textSize': '16px',
        'paragraph2textSize': '14px',
        
      },
      colors: {
        'primaryColor': '#39A7FF',
        'secondaryColor': '#1E2125',
        'paragraphColor': '#3C3E41',
      },
      backgroundImage: {
        'bg1': 'linear-gradient(145deg, #e2e8ec, #ffffff)',
        'bg2': 'linear-gradient(145deg, #00A9FF, #39A7FF)',
        'bghover': 'linear-gradient(145deg, #1363DF, #39A7FF)',
      },
      boxShadow: {
        'bgShadow': 'linear-gradient(145deg, #e2e8ec, #ffffff)',
        'boxShadow': '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.17, 0.67, 0, 1.01)'
      }
    },
  },
  plugins: [],
}