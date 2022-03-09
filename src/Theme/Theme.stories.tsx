import React from 'react'
import { Story, Meta } from '@storybook/react'

import Theme, { ThemeProps } from '.'
import Button from '../Button'


export default {
  title: 'Utils/Theme',
  component: Theme,
} as Meta

export const Default: Story<ThemeProps> = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <Theme
        dataTheme="dark"
        className="p-8 bg-neutral rounded-2xl"
      >
        <div className="flex gap-x-2">
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="accent">Accent</Button>
        </div>
      </Theme>
      
      <Theme
        dataTheme="cupcake"
        className="p-8 bg-neutral rounded-2xl"
      >
        <div className="flex gap-x-2">
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="accent">Accent</Button>
        </div>
      </Theme>

      <Theme
        dataTheme="lofi"
        className="p-8 bg-neutral rounded-2xl"
      >
        <div className="flex gap-x-2">
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="accent">Accent</Button>
        </div>
      </Theme>
    </div>
  )
}
