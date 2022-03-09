import React from 'react'
import { Story, Meta } from '@storybook/react'

import ButtonGroup, { ButtonGroupProps } from '.'
import Button from '../Button'

export default {
  title: 'Layout/ButtonGroup',
  component: ButtonGroup,
} as Meta

export const Default: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </ButtonGroup>
  )
}
Default.args = {}
