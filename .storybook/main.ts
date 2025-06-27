export default {
  stories: ['./docs/pages/Welcome.mdx', "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: false
  }
};
