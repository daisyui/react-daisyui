[![NPM Version](https://img.shields.io/npm/v/react-daisyui.svg?branch=master)](https://www.npmjs.com/package/react-daisyui) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-daisyui)](https://bundlephobia.com/result?p=react-daisyui) [![License](https://img.shields.io/npm/l/react-daisyui.svg)](https://github.com/daisyui/react-daisyui/blob/master/LICENSE)

# react-daisyui 🌼

DaisyUI components built with React, Typescript and TailwindCSS.

<a href="https://react.daisyui.com/">Check out our Storybook!</a>

---

## 💿 Install

Make sure you've installed <a href="https://tailwindcss.com/docs/installation">TailwindCSS</a> and <a href="https://daisyui.com/docs/install/">daisyUI</a>.

Install the package with npm or yarn:

```bash
npm install react-daisyui
```

To prevent TailwindCSS from purging your styles, add the following line to your tailwind.config.js:

```js
module.exports = {
  content: [],
  safelist: [
    {
      pattern: /./
    },
  ],
  ...
  plugins: [require("daisyui")],
}
```

## ⚡ Quick Start

Import react-daisyui components within your component files:

```js
import { Button } from 'react-daisyui'

export default (props) => {
  return <Button color="primary">Click me!</Button>
}
```

## 🎨 Themes

To apply a theme (or multiple themes) to a page or components, import the Theme component and wrap your content:

```js
import { Theme, Button } from 'react-daisyui'

export default (props) => {
  return (
    <>
      <Theme dataTheme="dark">
        <Button color="primary">Click me, dark!</Button>
      </Theme>

      <Theme dataTheme="light">
        <Button color="primary">Click me, light!</Button>
      </Theme>
    </>
  )
}
```

Use tools like the official <a href="https://daisyui.com/theme-generator/">daisyUI Theme Generator</a> or <a href="https://themes.ionevolve.com/">daisyUI Theme Builder</a> to easily create your own themes.

---

## ⚙️ Components

<details>
<summary>Actions:</summary>
  
- [x] <a href="https://react.daisyui.com/?path=/story/actions-button">Button</a>
- [X] <a href="https://react.daisyui.com/?path=/story/actions-dropdown">Dropdown</a>
- [X] <a href="https://react.daisyui.com/?path=/story/actions-modal">Modal</a>
- [X] <a href="https://react.daisyui.com/?path=/story/actions-swap">Swap</a>
</details>

<details>
<summary>Data Display:</summary>
  
- [x] <a href="https://react.daisyui.com/?path=/story/data-display-alert">Alert</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-avatar">Avatar</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-badge">Badge</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-card">Card</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-carousel">Carousel</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-collapse">Collapse</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-countdown">Countdown</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-kbd">Kbd</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-progress">Progress</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-radial-progress">Radial Progress</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-stats">Stats</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-table">Table</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-tooltip">Tooltip</a>
</details>

<details>
<summary>Data Input:</summary>

- [X] <a href="https://react.daisyui.com/?path=/story/data-input-checkbox">Checkbox</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-input-input">Input</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-input-radio">Radio</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-input-range">Range</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-input-rating">Rating</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-input-select">Select</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-input-textarea">Textarea</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-input-toggle">Toggle</a>
</details>

<details>
<summary>Layout:</summary>

- [X] <a href="https://react.daisyui.com/?path=/story/layout-artboard">Artboard</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-buttongroup">Button-Group</a>
- [X] <a href="https://react.daisyui.com/?path=/story/layout-divider">Divider</a>
- [X] <a href="https://react.daisyui.com/?path=/story/layout-drawer">Drawer</a>
- [X] <a href="https://react.daisyui.com/?path=/story/layout-footer">Footer</a>
- [X] <a href="https://react.daisyui.com/?path=/story/layout-hero">Hero</a>
- [X] <a href="https://react.daisyui.com/?path=/story/layout-indicator">Indicator</a>
- [X] <a href="https://react.daisyui.com/?path=/story/layout-inputgroup">Input Group</a>
- [X] <a href="https://react.daisyui.com/?path=/story/layout-mask">Mask</a>
- [X] <a href="https://react.daisyui.com/?path=/story/layout-stack">Stack</a>
</details>

<details>
<summary>Navigation:</summary>

- [X] <a href="https://react.daisyui.com/?path=/story/navigation-breadcrumbs">Breadcrumbs</a>
- [X] <a href="https://react.daisyui.com/?path=/story/navigation-link">Link</a>
- [X] <a href="https://react.daisyui.com/?path=/story/navigation-menu">Menu</a>
- [X] <a href="https://react.daisyui.com/?path=/story/navigation-navbar">Navbar</a>
- [X] <a href="https://react.daisyui.com/?path=/story/navigation-pagination">Pagination</a>
- [X] <a href="https://react.daisyui.com/?path=/story/navigation-steps">Steps</a>
- [X] <a href="https://react.daisyui.com/?path=/story/navigation-tabs">Tabs</a>
</details>

<details>
<summary>Mockup:</summary>

- [X] <a href="https://react.daisyui.com/?path=/story/mockup-code">Code</a>
- [X] <a href="https://react.daisyui.com/?path=/story/mockup-phone">Phone</a>
- [X] <a href="https://react.daisyui.com/?path=/story/mockup-window">Window</a>
</details>

---

## 🤝 Contributing

We're looking for contributors to help write stories and unit tests for components.

For story references, check out the official <a href="https://daisyui.com/components/">daisyUI examples.</a> 👈

### Creating new components

Run `npm run generate component ${your_new_component_name}`. The generator will ask a few questions and setup the component for you.

When you'e done, export the component from `index.tsx` and open a PR.

---

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/daisyui/react-daisyui/blob/main/LICENSE) file for details.
