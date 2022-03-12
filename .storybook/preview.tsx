import React from 'react'

import StoryLayout from './story-layout'

import '../src/styles.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  "previewTabs": {
    'storybook/docs/panel': { hidden: true }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: [
        "Home",
        "Actions",
        "Data Display",
        "Data Input",
        "Layout",
        "Navigation",
        "Mockup",
        "Utils"
      ]
    }
  },
}

export const decorators = [
  (Story, options) => (
    <StoryLayout
      title={options.title}
      description={options.story}
    >
      <Story />
    </StoryLayout>
  ),
]