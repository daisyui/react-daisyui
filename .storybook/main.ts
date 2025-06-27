export default {
  stories: ['./docs/pages/Welcome.mdx', "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false
      }
    }
  ],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: false
  }
};
