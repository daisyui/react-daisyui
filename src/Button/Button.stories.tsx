import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Actions/Button',
  component: Button,
  argTypes: {
    startIcon: {
      control: false,
    },
    endIcon: {
      control: false,
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}
export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export const Colors: Story<ButtonProps> = (args) => {
  return (
    <div>
      <div>
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
      <div>
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
Colors.args = {
  className: "m-1"
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

export const Icons: Story<ButtonProps> = (args) => {
  const favoriteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  )

  return (
    <div className="flex gap-x-2">
      <Button {...args} startIcon={favoriteIcon}>
        Icon at Start
      </Button>
      <Button {...args} endIcon={favoriteIcon}>
        Icon at End
      </Button>
    </div>
  )
}

export const AsHref: Story<ButtonProps> = (args) => {
  return (
    <div className="flex gap-x-2">
      <Button
        {...args}
        onClick={() => alert('See, I have an onClick event and no href.')}
      >
        I'm a {`<button>`}
      </Button>
      <Button href="https://google.com">I'm an {`<a>`}</Button>
    </div>
  )
}
