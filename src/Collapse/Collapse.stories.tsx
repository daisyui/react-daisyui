import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import Collapse, { CollapseProps } from '.'
import Swap from '../Swap'

export default {
  title: 'Data Display/Collapse',
  component: Collapse,
} as Meta

const Template: Story<CollapseProps> = ({ children, ...args }) => {
  return <Collapse {...args}>{children}</Collapse>
}

export const Default = Template.bind({})
Default.args = {
  children: [
    <Collapse.Title className="text-xl font-medium">
      Focus or click me to see content
    </Collapse.Title>,
    <Collapse.Content>
      By default, blurring does not close me.
    </Collapse.Content>,
  ],
}

export const ToggleWithFocus = Template.bind({})
ToggleWithFocus.args = {
  focusOpens: true,
  blurCloses: true,
  clickCloses: false,
  clickOpens: false,
  children: [
    <Collapse.Title className="text-xl font-medium">
      Focus me to see content
    </Collapse.Title>,
    <Collapse.Content>
      Clicking the title does not close me. Click somewhere else to close me.
    </Collapse.Content>,
  ],
}
export const ToggleWithClick = Template.bind({})
ToggleWithClick.args = {
  focusOpens: false,
  blurCloses: false,
  children: [
    <Collapse.Title className="text-xl font-medium">
      Click me to show/hide content
    </Collapse.Title>,
    <Collapse.Content>Focus/blur does nothing to me</Collapse.Content>,
  ],
}

export const ToggleWithFocusOrClick = Template.bind({})
ToggleWithFocusOrClick.args = {
  blurCloses: true,
  children: [
    <Collapse.Title className="text-xl font-medium">
      Click or focus/blur me to show/hide content
    </Collapse.Title>,
    <Collapse.Content>
      Clicking the title again, or anywhere else closes me
    </Collapse.Content>,
  ],
}

export const WithBorderAndBackgroundColor = Template.bind({})
WithBorderAndBackgroundColor.args = {
  className: 'border border-base-300 bg-base-100 rounded-box',
  children: [
    <Collapse.Title className="text-xl font-medium">
      Click or Focus me to see content
    </Collapse.Title>,
    <Collapse.Content>
      Notice that only clicking the title again will close, while focusing still
      opens it. Collapses are customizable like that.
    </Collapse.Content>,
  ],
}

export const WithArrowIcon = Template.bind({})
WithArrowIcon.args = {
  icon: 'arrow',
  children: [
    <Collapse.Title className="text-xl font-medium">
      Focus me to see content
    </Collapse.Title>,
    <Collapse.Content>This is some content</Collapse.Content>,
  ],
}

export const WithPlusMinusIcon = Template.bind({})
WithPlusMinusIcon.args = {
  icon: 'plus',
  children: [
    <Collapse.Title className="text-xl font-medium">
      Focus me to see content
    </Collapse.Title>,
    <Collapse.Content>This is some content</Collapse.Content>,
  ],
}
WithPlusMinusIcon.storyName = 'With Arrow Plus/Minus Icon'

export const WithCustomIcon: Story<CollapseProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.open)

  return (
    <Collapse
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      icon={
        <Swap
          active={isOpen}
          onClick={() => console.log('test')}
          onElement={
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          }
          offElement={
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          }
        />
      }
    >
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>This is some content</Collapse.Content>
    </Collapse>
  )
}

export const ForceOpen = Template.bind({})
ForceOpen.args = {
  forceOpen: true,
  className: 'border border-base-300 bg-base-100 rounded-box',
  children: [
    <Collapse.Title className="text-xl font-medium">
      I have forceOpen prop set to true
    </Collapse.Title>,
    <Collapse.Content>You cannot close me</Collapse.Content>,
  ],
}

export const ForceClose = Template.bind({})
ForceClose.args = {
  forceClose: true,
  className: 'border border-base-300 bg-base-100 rounded-box',
  children: [
    <Collapse.Title className="text-xl font-medium">
      I have forceClose prop set to true
    </Collapse.Title>,
    <Collapse.Content>
      You cannot open me (not that you will even see this...)
    </Collapse.Content>,
  ],
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
