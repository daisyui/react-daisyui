import React from 'react'
import { Story, Meta } from '@storybook/react'

import Collapse, { CollapseProps } from '.'

export default {
  title: 'Data Display/Collapse',
  component: Collapse,
} as Meta

const Template: Story<CollapseProps> = (args) => {
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

export const Default = Template.bind({})
Default.args = {}

export const Checkbox = Template.bind({})
Checkbox.args = {
  checkbox: true,
}

export const WithBorderAndBackground = Template.bind({})
WithBorderAndBackground.args = {
  className: 'border border-base-300 bg-base-100 rounded-box',
}

export const WithArrow = Template.bind({})
WithArrow.args = {
  className: 'border border-base-300 bg-base-100 rounded-box',
  icon: 'arrow',
}

export const WithPlusMinus = Template.bind({})
WithPlusMinus.args = {
  className: 'border border-base-300 bg-base-100 rounded-box',
  icon: 'plus',
}

export const ForceOpen = Template.bind({})
ForceOpen.args = {
  className: 'border border-base-300 bg-base-100 rounded-box',
  open: true,
}

export const ForceClose = Template.bind({})
ForceClose.args = {
  className: 'border border-base-300 bg-base-100 rounded-box',
  open: false,
}

export const CustomColorsWithFocus: Story<CollapseProps> = (args) => {
  return (
    <Collapse {...args} className="group">
      <Collapse.Title className="bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content className="bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </Collapse.Content>
    </Collapse>
  )
}

export const CustomColorsWithFocusCheckbox: Story<CollapseProps> = (args) => {
  return (
    <Collapse {...args} className="group" checkbox>
      <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </Collapse.Content>
    </Collapse>
  )
}
