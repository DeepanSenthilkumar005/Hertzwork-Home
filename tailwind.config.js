module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textShadow: {
        glow: '0 0 5px #ff8c00, 0 0 10px #ff8c00, 0 0 20px #ff8c00, 0 0 30px #ff4500, 0 0 40px #ff4500, 0 0 50px #ff4500',
      },
      fontFamily: {
        segoe: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      colors: { 
        welcometext:'#86868b',
        darkGray: '#1a1a1a',
        csorange: '#FE5D26',
        csblue : '#6C63FF00',
        csblue2:'#4280EF',
        // 'cus-theme': '#ffffff',
        //  customGray: '#f8f8f8',
        //  customBlack: '#000000',
        },
      screens: { 
        'xsm': { 'min': '0px' },
        'stm': { 'min': '10px', 'max': '768px' },
      },
      fontSize: { 
        'cstext': '23px',
      },

      

      fontFamily: { 
        roboto: ['Roboto', 'sans-serif'],
         openSans: ['Open Sans', 'sans-serif'],
          lato: ['Lato', 'sans-serif'],
           montserrat: ['Montserrat', 'sans-serif'],
            merriweather: ['Merriweather', 'serif'],
            inter: ['Inter', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
            
           },
    },
  },
  plugins: [
    function({ addUtilities }) 
    { addUtilities(
      { '.no-scrollbar': { '-ms-overflow-style': 'none',/* Internet Explorer 10+ */ 
       'scrollbar-width': 'none', /* Firefox */ },
        '.no-scrollbar::-webkit-scrollbar': { 'display': 'none', /* Safari and Chrome */ },
       });
       }
  ],
}
