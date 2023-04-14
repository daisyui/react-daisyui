import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['./docs/pages/Welcome.mdx', "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [{
    name: '@storybook/addon-styling',
    options: {
      implementation: require("postcss"),
    },
  }, {
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: false
    }
  }],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: false
  }
};

export default config;
