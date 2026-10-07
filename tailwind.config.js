/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        nav: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#bcddff',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FE5A2C', // Logo "Cloud" vibrant coral-orange
          600: '#ea481b',
          700: '#c2360f',
          800: '#9a2e12',
          900: '#7c2813',
        },
      },
    },
  },
  plugins: [],
}
