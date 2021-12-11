module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],
  typescript: {
    check: true, // type-check stories during Storybook build
  }
}