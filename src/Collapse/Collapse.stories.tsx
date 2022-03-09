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
        <div className="collapse-title text-xl font-medium">
            Focus me to see content
        </div>
    </Collapse>
  )
}

Default.args = {
    className: "border border-base-300 bg-base-100 rounded-box",
    content: <p>tabindex="0" attribute is necessary to make the div focusable</p>,
    icon: "arrow",
}
