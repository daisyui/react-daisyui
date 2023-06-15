import React, { useState } from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Collapse, { CollapseProps } from '.'

export default {
  title: 'Data Display/Collapse',
  component: Collapse,
  args: {
    className: 'bg-base-200',
  },
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

export const Checkbox: Story<CollapseProps> = (args) => {
  return (
    <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content>hello</Collapse.Content>
    </Collapse>
  )
}
Checkbox.args = {
  checkbox: true,
}

export const WithBorderAndBackground = Template.bind({})
WithBorderAndBackground.args = {
  className: 'border border-base-300 bg-base-200',
}

export const WithArrow = Template.bind({})
WithArrow.args = {
  className: 'border border-base-300 bg-base-200',
  icon: 'arrow',
}

export const WithPlusMinus = Template.bind({})
WithPlusMinus.args = {
  className: 'border border-base-300 bg-base-200',
  icon: 'plus',
}

export const ForceOpen: Story<CollapseProps> = (args) => {
  return (
    <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        I have collapse-open class
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>
  )
}
ForceOpen.args = {
  className: 'border border-base-300 bg-base-200',
  open: true,
}

export const ForceClose: Story<CollapseProps> = (args) => {
  return (
    <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        I have collapse-close class
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>
  )
}
ForceClose.args = {
  className: 'border border-base-300 bg-base-200',
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

export const HandlingEvents: Story<CollapseProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    console.log('toggled!')
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <span>Checkbox is {isOpen ? 'open' : 'closed'}.</span>
      <Collapse
        {...args}
        className="group"
        onClose={handleClose}
        onOpen={handleOpen}
        onToggle={handleToggle}
      >
        <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Click me to show/hide content
        </Collapse.Title>
        <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </Collapse.Content>
      </Collapse>
    </div>
  )
}

export const CheckboxEvents: Story<CollapseProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    console.log('toggled!')
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <span>Checkbox is {isOpen ? 'open' : 'closed'}.</span>
      <Collapse
        {...args}
        className="group"
        onClose={handleClose}
        onOpen={handleOpen}
        onToggle={handleToggle}
        checkbox
      >
        <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Click me to show/hide content
        </Collapse.Title>
        <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </Collapse.Content>
      </Collapse>
    </div>
  )
}
