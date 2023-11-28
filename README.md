<div align="center">

<img src="https://user-images.githubusercontent.com/64439681/181564610-a0fd8fef-b552-4cc5-b115-8652dc142065.svg">

**daisyUI components built with React, Typescript and TailwindCSS**

[ [See all components](https://react.daisyui.com/) ]

</div>

![card-3](https://user-images.githubusercontent.com/64439681/181566540-b1e37814-c72a-48af-bbe2-80367b000770.png)

# react-daisyui 🌼

[![NPM Version](https://img.shields.io/npm/v/react-daisyui.svg?branch=master)](https://www.npmjs.com/package/react-daisyui) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-daisyui)](https://bundlephobia.com/result?p=react-daisyui) [![npm](https://img.shields.io/npm/dt/react-daisyui?label=installs)](https://www.npmjs.com/package/react-daisyui) [![License](https://img.shields.io/npm/l/react-daisyui.svg)](https://github.com/daisyui/react-daisyui/blob/master/LICENSE) [![Discord Invite](https://img.shields.io/discord/951593480625459340?color=%237289DA&label=chat&logo=discord&logoColor=white)](https://discord.gg/4v2eS3VQNv)

📖 Check out our <a href="https://react.daisyui.com/">Storybook</a> | 🎲 Try it with <a href="https://codesandbox.io/s/react-daisyui-example-840os3?file=/src/App.tsx">CodeSandbox</a>

🙋 Need help or have a suggestion? Join our [discord](https://discord.gg/4v2eS3VQNv)!

---

## 💿 Install

Make sure you've installed <a href="https://tailwindcss.com/docs/installation">TailwindCSS</a> and <a href="https://daisyui.com/docs/install/">daisyUI</a>.

Install the package with npm or yarn:

```bash
npm install react-daisyui
or
yarn add react-daisyui
```

To prevent TailwindCSS from purging your styles, add the following line to your tailwind.config.js:

```js
module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  plugins: [require('daisyui')],
}
```

<details>
<summary>For Next.js 13 - 14:</summary>

Modify `transpilePackages` in your `next.config.js` file:

```js
const nextConfig = {
  // ... your content here
  transpilePackages: ['react-daisyui'],
  reactStrictMode: true,
}

module.exports = nextConfig
```

</details>

<details>
<summary>For Next.js 12:</summary>
Install next-transpile modules:

```bash
npm install next-transpile-modules
```

And import the package inside your `next.config.js` file:

```js
const withTM = require('next-transpile-modules')(['react-daisyui'])
```

Finally, you can wrap your module.exports using withTM like so:

```js
module.exports = withTM({
  //... your content here
  reactStrictMode: true,
})
```

</details>

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
- [ ] Theme Controller
</details>

<details>
<summary>Data Display:</summary>
  
- [x] <a href="https://react.daisyui.com/?path=/story/data-display-accordion">Accordion</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-avatar">Avatar</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-badge">Badge</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-card">Card</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-carousel">Carousel</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-chart-bubble">Chart Bubble</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-collapse">Collapse</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-countdown">Countdown</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-diff">Diff<a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-kbd">Kbd</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-stats">Stats</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-table">Table</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-timeline">Timeline</a>
</details>

<details>
<summary>Navigation:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/navigation-bottomnavigation">Bottom Navigation</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-breadcrumbs">Breadcrumbs</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-link">Link</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-menu">Menu</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-navbar">Navbar</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-pagination">Pagination</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-steps">Steps</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-tabs">Tabs</a>
</details>

<details>
<summary>Feedback:</summary>
  
- [x] <a href="https://react.daisyui.com/?path=/story/feedback-alert">Alert</a>
- [X] <a href="https://react.daisyui.com/?path=/story/feedback-loading">Loading</a>
- [X] <a href="https://react.daisyui.com/?path=/story/feedback-progress">Progress</a>
- [X] <a href="https://react.daisyui.com/?path=/story/feedback-radial-progress">Radial Progress</a>
- [ ] Skeleton
- [x] <a href="https://react.daisyui.com/?path=/story/feedback-toast">Toast</a>
- [X] <a href="https://react.daisyui.com/?path=/story/feedback-tooltip">Tooltip</a>
</details>

<details>
<summary>Data Input:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/data-input-checkbox">Checkbox</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-fileinput">FileInput</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-input">Input</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-radio">Radio</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-range">Range</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-rating">Rating</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-select">Select</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-textarea">Textarea</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-toggle">Toggle</a>
</details>

<details>
<summary>Layout:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/layout-artboard">Artboard</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-buttongroup">Button Group (Deprecated)</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-divider">Divider</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-drawer">Drawer</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-footer">Footer</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-hero">Hero</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-indicator">Indicator</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-inputgroup">Input Group (Deprecated)</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-join">Join (group items)</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-mask">Mask</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-stack">Stack</a>
</details>

<details>
<summary>Mockup:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/mockup-browser">Browser</a>
- [x] <a href="https://react.daisyui.com/?path=/story/mockup-code">Code</a>
- [x] <a href="https://react.daisyui.com/?path=/story/mockup-phone">Phone</a>
- [x] <a href="https://react.daisyui.com/?path=/story/mockup-window">Window</a>
</details>

---

## 🤝 Contributing

We're looking for contributors to help write stories and unit tests for components.

### Creating new components

Run `npm run generate component ${your_new_component_name}`. The generator will ask a few questions and setup the component for you.

When you'e done, export the component from `index.tsx` and open a PR.

### Creating new stories

Check out the official <a href="https://daisyui.com/components/">daisyUI examples.</a> 👈

---

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/daisyui/react-daisyui/blob/main/LICENSE) file for details.
