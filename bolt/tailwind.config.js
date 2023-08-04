/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}" ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('https://bolt.eu/static/3eeff33cf8407660180b833630be1c57/b0b7b/hero.jpg')"
      },

      screens:{
        md: { min:'415px', max:'800px' },
        sm: { max:'414px' }
        
      }
    },
   
  },
  plugins: [],
}

