/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'image-6' : "url('../public/assets/img/image6.png')",
        'image-9' : "url('../public/assets/img/image9.png')",
        'Slider-1' : "url('../public/assets/img/Slider1.png')",
        'Slider-2' : "url('../public/assets/img/Slider2.png')",
        'Slider-3' : "url('../public/assets/img/Slider3.png')",
        'Slider-4' : "url('../public/assets/img/Slider4.png')",
        

      },
    },
  },
  plugins: [],
}
