module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins','sans-serif'],
        helvetica:['Helvetica','sans-serif'],
      },
      fontSize: {
        'testimonial':'clamp(42px,5.5vw,90px)',
        'h0Text':'clamp(36px,4vw,80px)',        
        'h1Text':'clamp(32px,3.5vw,72px)',
        'h2Text':'clamp(28px,3vw,56px)',
        'h3Text':'clamp(24px,2.5vw,52px)',
        'h4Text':'clamp(20px,2vw,48px)',
        'h5Text':'clamp(16px,1.5vw,44px)',
        'h6Text':'clamp(14px,1.25vw,24px)',
        'mediumText': 'clamp(12px, 1.2vw, 24px)',
        'regularText': 'clamp(12px, 1vw, 18px)',
        'smallText': 'clamp(10px, .875vw, 16px)',
        'tinyText': 'clamp(8px, .75vw, 14px)',
      },
      colors:{
        orangeChosen:"#FF7500",
        brownChosen:"#9C572E",
        paleOrangeChosen:"#FFD7C3",
        linenChosen:"#FEF0E6"
      }
    },
  },
  plugins: [],
};