module.exports = {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
        boxShadow:{
          card:'5px 5px 15px 5px rgba(0,0,0,0.5)',
          moncvimg:'5px 5px 15px 5px rgba(0,0,0,0.4)'
        },
        backgroundImage: {
          btnGradient:'linear-gradient(90deg, rgba(238,171,97,1) 0%, rgba(238,171,97,1) 28%, rgba(237,105,189,1) 100%)',
          btnGradientTransparent:'linear-gradient(90deg, rgba(238,171,97,0) 0%, rgba(238,171,97,0) 28%, rgba(237,105,189,0) 100%)',
        },
        keyframes: {
          fade: {
            '0%': { 'background-image': 'linear-gradient(90deg, rgba(238,171,97,0) 0%, rgba(238,171,97,0) 28%, rgba(237,105,189,0) 100%)' },
            '100%': { 'background-image': 'linear-gradient(90deg, rgba(238,171,97,1) 0%, rgba(238,171,97,1) 28%, rgba(237,105,189,1) 100%)' },
          },
        }, 
        animation: {
          'fade': 'fade 0.7s ease forwards',
        }, 
        fontFamily: {
        nav:['Montserrat'],  
        } 
    },
  },
  plugins: [],
}
