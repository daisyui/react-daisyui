import React from 'react'
import { Story, Meta } from '@storybook/react'

import Card, { CardProps } from '.'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta

export const Default: Story<CardProps> = (args) => {
  return (
    <Card {...args} />
  )
}
Default.args = {}