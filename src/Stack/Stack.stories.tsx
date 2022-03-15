import React from 'react'
import { Story, Meta } from '@storybook/react'

import Stack, { StackProps } from '.'
import Card from '../Card'

export default {
  title: 'Layout/Stack',
  component: Stack,
} as Meta

export const Default: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
        1
      </div>
      <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
        2
      </div>
      <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
        3
      </div>
    </Stack>
  )
}

export const StackedImages: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <img
        src="https://api.lorem.space/image/face?w=100&h=100&hash=8B7BCDC2"
        alt="Image 1"
        className="rounded"
      />
      <img
        src="https://api.lorem.space/image/face?w=100&h=100&hash=500B67FB"
        alt="Image 2"
        className="rounded"
      />
      <img
        src="https://api.lorem.space/image/face?w=100&h=100&hash=A89D0DE6"
        alt="Image 3"
        className="rounded"
      />
    </Stack>
  )
}

export const StackedCardsWithBorder: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <Card className="text-center border border-base-content w-36 bg-base-100">
        <Card.Body>A</Card.Body>
      </Card>
      <Card className="text-center border border-base-content w-36 bg-base-100">
        <Card.Body>B</Card.Body>
      </Card>
      <Card className="text-center border border-base-content w-36 bg-base-100">
        <Card.Body>C</Card.Body>
      </Card>
    </Stack>
  )
}

export const StackedCardsWithShadow: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <Card className="text-center shadow-md w-36 bg-base-200">
        <Card.Body>A</Card.Body>
      </Card>
      <Card className="text-center shadow-md w-36 bg-base-200">
        <Card.Body>B</Card.Body>
      </Card>
      <Card className="text-center shadow-md w-36 bg-base-200">
        <Card.Body>C</Card.Body>
      </Card>
    </Stack>
  )
}

export const StackedCards: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <Card className="text-center shadow-md bg-primary text-primary-content">
        <Card.Body>
          <Card.Title>Notification 1</Card.Title>
          <p>You have 3 unread messages. Tap here to see.</p>
        </Card.Body>
      </Card>
      <Card className="text-center shadow-md bg-primary text-primary-content">
        <Card.Body>
          <Card.Title>Notification 2</Card.Title>
          <p>You have 3 unread messages. Tap here to see.</p>
        </Card.Body>
      </Card>
      <Card className="text-center shadow-md bg-primary text-primary-content">
        <Card.Body>
          <Card.Title>Notification 3</Card.Title>
          <p>You have 3 unread messages. Tap here to see.</p>
        </Card.Body>
      </Card>
    </Stack>
  )
}

Default.args = {}
