/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      height: {
        main: 'calc(100vh - 8rem)'
      },
      fontWeight: {
        super: '900'
      },
      colors: {
        white: '#FFF',
        black: {
          DEFAULT: '#161616',
          100: '#252525'
        },
        orange: {
          DEFAULT: '#FFCC8D',
          100: '#FFEAD0',
          200: '#E17654',
          300: '#FFDDB2'
        },
        gray: {
          DEFAULT: '#4D4D4D',
          100: '#B9B9B9'
        },
        beige: {
          DEFAULT: '#FFF7ED',
        },
        cyan: {
          DEFAULT: '#115E59'
        }
      },
      backgroundImage: {
        home: "url('./src/assets/home.png')"
      }
    },
  },
  plugins: [],
}

