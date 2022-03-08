module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
  },
  plugins: [require("daisyui")],
}
