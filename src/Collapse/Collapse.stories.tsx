import React from 'react'
import { Story, Meta } from '@storybook/react'

import Collapse, { CollapseProps } from '.'

export default {
  title: 'Data Display/Collapse',
  component: Collapse,
} as Meta

export const Default: Story<CollapseProps> = (args) => {
  return (
    <Collapse {...args}>
        <Collapse.Title className="text-xl font-medium">
            Focus me to see content
        </Collapse.Title>
        <Collapse.Content>
          tabindex="0" attribute is necessary to make the div focusable
        </Collapse.Content>
    </Collapse>
  )
}

Default.args = {
    className: "border border-base-300 bg-base-100 rounded-box",
    icon: "arrow",
}
