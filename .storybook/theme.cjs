import { create } from '@storybook/theming'

export default create({
  base: 'dark',
  brandTitle: 'react-daisyUI',
  brandUrl: 'https://github.com/benjitrosch/react-daisyui',
  brandImage: 'https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg',

  colorPrimary: '#3ABFF8',
  colorSecondary: '#6419E6',

  // UI
  appBg: '#222630',
  appContentBg: '#191D24',
  appBorderColor: '#323945',

  // Text Colors
  textColor: '#A6ADBA',

  // Toolbar default and active colors
  barTextColor: '#A6ADBA',
  barSelectedColor: '#C3D0EA',
  barBg: '#191D24',
})
