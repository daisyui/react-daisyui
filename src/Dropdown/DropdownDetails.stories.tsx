import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Dropdown, { DetailsProps } from '.'

export default {
  title: 'Actions/Dropdown/Details',
  component: Dropdown.Details,
} as Meta

export const Default: Story<DetailsProps> = (args) => {
  return (
    <div className="my-32">
      <Dropdown.Details {...args}>
        <Dropdown.Details.Toggle>Click</Dropdown.Details.Toggle>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Details>
    </div>
  )
}
Default.args = {}
