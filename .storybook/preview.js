import React from 'react'

import Layout from '../src/Layout'

import '../src/styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}

export const decorators = [
  (Story, options) => (
    <Layout
      title={options.title}
      description={options.story}
    >
      <Story />
    </Layout>
  ),
]