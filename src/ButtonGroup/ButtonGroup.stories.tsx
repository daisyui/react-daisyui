import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import ButtonGroup, { ButtonGroupProps } from '.'
import Button from '../Button'
import Radio from '../Radio'

export default {
  title: 'Layout/ButtonGroup (Deprecated)',
  component: ButtonGroup,
} as Meta

const Template: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button active>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Vertical = Template.bind({})
Vertical.args = { vertical: true }
