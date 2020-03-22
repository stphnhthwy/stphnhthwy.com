module.exports = {
    theme: {
      colors: {
        black: '#0A0023',
        white: '#fff',
        blue: {
          100: "#e9f0ff",
          200: "#cadafd",
          300: "#acc5fb",
          400: "#749cf3",
          500: "#4578e6",
          600: "#245bd3",
          700: "#0e44b8",
          800: "#023095",
          900: "#00226b",
        },
        purple: {
          100: '#EAE6FD',
          200: '#C3B5FB',
          300: '#A895FA',
          400: '#8064F8',
          500: '#5934F6',
          600: '#3C23A6',
          700: '#27166C',
          800: '#180E44',
          900: '#110A31',
        },
        gray: {
          100: "#fafafa",
          200: "#f5f6f7",
          300: "#f0f2f4",
          400: "#e2e4e8",
          500: "#cdd0d5",
          600: "#b0b2b8",
          700: "#888a8e",
          800: "#555659",
          900: "#1d1e1f",
        },
      },
      screens: {
        'xs': {'min': '320px', 'max': '639px'},
        'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '967px'},
        'lg': {'min': '968px', 'max': '1023px'},
        'xl': {'min': '1024px',},
      },
      fontFamily: {
        'sans': ['Work Sans'],
        'serif': ['Eczar'],
      },
      truncate: {
        lines: {
          2: '2',
          4: '4',
          6: '6',
        }
      },
      extend: {},
    },
    variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
    plugins: [
      require('tailwindcss-truncate-multiline')(),
    ],
  }