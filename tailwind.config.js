/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paste your color scheme here
        gainsboro_100: '#dadada',
        gainsboro_200: 'rgba(217, 217, 217, 0.13)',
        white1: '#fff',
        gray_100: '#20252d',
        text_heading: '#131313',
        gray_200: '#0c0c0c',
        gray_300: 'rgba(255, 255, 255, 0.2)',
        gray_400: 'rgba(255, 255, 255, 0)',
        gray_500: 'rgba(255, 255, 255, 0.5)',
        black: '#000',
        darkblue: '#030086',
        darkslategray: '#015967',
        cadetblue: '#2bafc5',
        royalblue: '#0075ff',
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
      fontSize: {
        // You can also include font sizes here if needed
        'special-text-big': '24px',
        'typography-level': '20px',
        'typography-level1': '22px',
        'typography-body': '17px',
        'size-mini': '15px',
        'size-21xl': '40px',
        'size-17xl': '36px',
      },
      // You can also include paddings and border radiuses here if needed
    },
  },
  plugins: [],
}
