import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Badge, { BadgeProps } from '.'
import Button from '../Button'

export default {
  title: 'Data Display/Badge',
  component: Badge,
} as Meta

export const Default: Story<BadgeProps> = (args) => {
  return <Badge {...args}>Badge</Badge>
}
Default.args = {}

export const BrandColors: Story<BadgeProps> = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <Badge {...args}>default</Badge>
      <Badge {...args} color="neutral">
        neutral
      </Badge>
      <Badge {...args} color="primary">
        primary
      </Badge>
      <Badge {...args} color="secondary">
        secondary
      </Badge>
      <Badge {...args} color="accent">
        accent
      </Badge>
      <Badge {...args} color="ghost">
        ghost
      </Badge>
    </div>
  )
}

export const Outline: Story<BadgeProps> = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <Badge {...args}>default</Badge>
      <Badge {...args} color="primary">
        primary
      </Badge>
      <Badge {...args} color="secondary">
        secondary
      </Badge>
      <Badge {...args} color="accent">
        accent
      </Badge>
    </div>
  )
}
Outline.args = {
  variant: 'outline',
}

export const Sizes: Story<BadgeProps> = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <Badge {...args} size="lg">
        987,654
      </Badge>
      <Badge {...args} size="md">
        987,654
      </Badge>
      <Badge {...args} size="sm">
        987,654
      </Badge>
      <Badge {...args} size="xs">
        987,654
      </Badge>
    </div>
  )
}

export const Empty: Story<BadgeProps> = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <Badge {...args} size="lg" />
      <Badge {...args} size="md" />
      <Badge {...args} size="sm" />
      <Badge {...args} size="xs" />
    </div>
  )
}
Empty.args = {
  color: 'primary',
}

export const StateColors: Story<BadgeProps> = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <Badge {...args} color="info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        info
      </Badge>
      <Badge {...args} color="success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        success
      </Badge>
      <Badge {...args} color="warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        warning
      </Badge>
      <Badge {...args} color="error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        error
      </Badge>
    </div>
  )
}
StateColors.args = {
  className: 'gap-2',
}

export const BadgeInText: Story<BadgeProps> = (args) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h2 className="text-xl">
        Heading
        <Badge {...args} size="lg">
          NEW
        </Badge>
      </h2>
      <h3 className="text-xl">
        Heading
        <Badge {...args} size="md">
          NEW
        </Badge>
      </h3>
      <h4 className="text-base">
        Heading
        <Badge {...args} size="sm">
          NEW
        </Badge>
      </h4>

      <h5 className="text-sm">
        Heading
        <Badge {...args} size="xs">
          NEW
        </Badge>
      </h5>
    </div>
  )
}
BadgeInText.args = {}

export const BadgeInAButton: Story<BadgeProps> = (args) => {
  return (
    <div className="flex gap-2 items-center">
      <Button>
        Inbox
        <Badge {...args}>+99</Badge>
      </Button>
      <Button>
        Inbox
        <Badge {...args} color="secondary">
          +99
        </Badge>
      </Button>
    </div>
  )
}
BadgeInAButton.args = {}
