import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Collapse, { DetailsProps } from '.'

export default {
  title: 'Data Display/Collapse/Details',
  component: Collapse.Details,
} as Meta

export const Default: Story<DetailsProps> = (args) => {
  return (
    <Collapse.Details {...args}>
      <Collapse.Details.Title className="text-xl font-medium">
        Click to open/close
      </Collapse.Details.Title>
      <Collapse.Content>
        <p>content</p>
      </Collapse.Content>
    </Collapse.Details>
  )
}
Default.args = {
  className: 'bg-base-200',
}
