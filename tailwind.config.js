module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
