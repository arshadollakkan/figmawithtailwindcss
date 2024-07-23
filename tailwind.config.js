/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
screens:{
  dj:'375px'
},
    fontFamily:{
    'body':['Montserrat']
    },
    borderRadius:{
 df:'5px',
 df1:'3px',
 df2:'44.79px',
 df3:'37px',
 df4:'20px'
    },
    fontSize:{
      base2:['45px','80px'],
      base:
        ['24px','32px'],
        base3:['14px','22px'],
        base4:['58px','80px'],
        base5:['16px','24px'],
        base6:['40px','50px']
        ,
        base7:['14px','20px']
        ,base8:['14px','24px'],
        base9:['12px','16px'],
        jalal:['14px','28px']


      
    },

    extend: {
      colors:{
        'arshad':'#737373',
        'asd':'#96BB7C'

      }
    },
  },
  plugins: [],
}

