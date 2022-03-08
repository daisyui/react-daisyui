module.exports = {
  // mode: 'jit',
  purge: {
    enabled: false,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
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
