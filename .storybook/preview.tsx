import React from 'react'

import StoryLayout from './story-layout'

import '../src/styles.css'
import { DEFAULT_THEME, STORAGE_KEY, THEME_PICKER_LIST } from './theming'
import { docsTheme } from './theme.cjs'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  previewTabs: {
    'storybook/docs/panel': { hidden: true },
  },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: [
        'Welcome',
        'Utils',
        'Actions',
        'Data Display',
        'Data Input',
        'Layout',
        'Navigation',
        'Mockup',
      ],
    },
  },
  themes: {
    default: window.localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME,
    onChange: (theme) => {
      // STORAGE_KEY does not work in onChange... not sure why
      if (theme) {
        window.localStorage.setItem(
          'sb-react-daisyui-preview-theme',
          theme.class
        )
      } else {
        window.localStorage.removeItem('sb-react-daisyui-preview-theme')
      }
    },
    list: THEME_PICKER_LIST,
  },
  docs: {
    theme: docsTheme,
    options: {
      layout: 'fullscreen',
    },
  },
}

export const decorators = [
  (Story, options) => (
    <StoryLayout
      title={options.title}
      description={options.story}
      source={
        options.parameters.storySource.source.
        /* TODO: clean up all this string formatting/regex */
        /* Removes the args arrow function */
        replace('(args) => {', '').
        /* Removes leftover newline from previous replace */
        replace('\n', '').
        /* Removes the last occurence of a closing bracket (from the lambda) */
        replace(/}([^}]*)$/, '$1')
      }
    >
      <Story />
    </StoryLayout>
  ),
]
