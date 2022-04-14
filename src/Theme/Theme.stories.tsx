import React from 'react'
import { Story, Meta } from '@storybook/react'

import Theme, { ThemeProps } from '.'
import Button from '../Button'
import { DEFAULT_THEMES } from '../defaultThemes'
import { toTitleCase } from '../utils'

export default {
  title: 'Utils/Theme',
  component: Theme,
} as Meta

export const Default: Story<ThemeProps> = (args) => {
  return (
    <div className="flex flex-col gap-y-4">
      {DEFAULT_THEMES.map((theme) => (
        <Theme
          key={`theme.${theme}`}
          dataTheme={theme}
          className="p-8 bg-neutral rounded-2xl"
        >
          <h2 className="text-xl font-semibold mb-4">
            {toTitleCase(theme)}
          </h2>
          <div className="flex gap-x-2">
            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="accent">Accent</Button>
          </div>
        </Theme>
      ))}
    </div>
  )
}
