/** @type {import('tailwindcss').Config} */
export default{
  content: ['./src/**/*.{js,jsx,ts,tsxhtml}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui:{
    themes:['light'],
  }
}