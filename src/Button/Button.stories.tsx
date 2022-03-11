import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Actions/Button',
  component: Button,
} as Meta

export const Colors: Story<ButtonProps> = (args) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-x-2">
        <Button {...args}>Default</Button>
        <Button {...args} color="primary">
          Primary
        </Button>
        <Button {...args} color="secondary">
          Secondary
        </Button>
        <Button {...args} color="accent">
          Accent
        </Button>
        <Button {...args} color="ghost">
          Ghost
        </Button>
      </div>
      <div className="flex gap-x-2">
        <Button {...args} color="success">
          Success
        </Button>
        <Button {...args} color="info">
          Info
        </Button>
        <Button {...args} color="warning">
          Warning
        </Button>
        <Button {...args} color="error">
          Error
        </Button>
      </div>
    </div>
  )
}

export const Variants: Story<ButtonProps> = (args) => {
  return (
    <div className="flex gap-x-2">
      <Button {...args}>Default</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  )
}
