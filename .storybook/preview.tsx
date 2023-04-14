import React from 'react'
import type { Preview } from "@storybook/react";

import StoryLayout from './StoryLayout'

import '../src/styles.css'
import { DEFAULT_THEME, STORAGE_KEY, THEME_PICKER_LIST } from './theming'
import theme from './theme'

const preview: Preview = {
  parameters: {
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
      theme: theme,
      options: {
        layout: 'fullscreen',
      },
    },
  },
  decorators: [
    (Story, options) => (
      <StoryLayout
        title={options.title}
        description={options.name}
        source={
          options.parameters.docs.source.originalSource
          /* TODO: clean up all this string formatting/regex */
          /* Removes the args arrow function */
          .replace(/^args\s*=>\s*\{\s*/, '    ')
          .replace(/\(.*args.*\)\s*=>\s*\{\s*\n/, '    ')
          .replace(/^(\s*)return\s+/, '$1')
          .replace(/_s\(\);/, '')
          /* Removes the last occurence of a closing bracket (from the lambda) */
          .replace(/}([^}]*)$/, '$1')
          /* Removes the last occurence of a semicolon */
          .replace(/;(?=[^;]*$)/, '')
        }
      >
        <Story />
      </StoryLayout>
    ),
  ]
}

export default preview
