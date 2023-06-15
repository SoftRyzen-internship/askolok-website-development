/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './page-components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        blueBgGradient: 'linear-gradient(130.88deg, #1729B2 4.35%, #4475EB 96.44%)',
      },
      boxShadow: {
        primaryShadow: ' 0px 2px 20px rgba(37, 37, 37, 0.15)',
      },
      colors: {
        whiteBg: '#FFFFFF',
        blueBg: '#F0F4FF',
        blackBg: '#252525',
        borderPrimary: '#CCCCCC',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
