/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#3E6227',
        'secondary':'#0F172A',
        'd4':'#475569',
      },
      fontSize:{
        '14':['14px','20px'],
        '16':['16px','24px'],
        '18':['18px','26px'],
        '24':['24px','32px'],
        '26':['26px','36px'],
        '36':['36px','44px'],
        '40':['40px','52px'],
        '44':['44px','60px'],
        '48':['48px','64px'],
        '56':['56px','72px'],
        '64':['64px','74px'],
      },
      boxShadow:{
        'one':'17px 17px 200px 0px #40454F1F'
      }
    },
  },
  plugins: [],
}