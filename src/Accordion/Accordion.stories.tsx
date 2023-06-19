import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Accordion, { AccordionProps } from '.'
import Join from '../Join'

export default {
  title: 'Data Display/Accordion',
  component: Accordion,
} as Meta

export const Default: Story<AccordionProps> = (args) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Accordion {...args} defaultChecked>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
    </div>
  )
}
Default.args = {
  className: 'bg-base-200',
}

export const WithArrow: Story<AccordionProps> = (args) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Accordion {...args} defaultChecked>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
    </div>
  )
}
WithArrow.args = {
  className: 'bg-base-200',
  icon: 'arrow',
}

export const WithPlusMinus: Story<AccordionProps> = (args) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Accordion {...args} defaultChecked>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
    </div>
  )
}
WithPlusMinus.args = {
  className: 'bg-base-200',
  icon: 'plus',
}

export const AndJoinTogether: Story<AccordionProps> = (args) => {
  return (
    <Join className="w-full" vertical={true}>
      <Accordion {...args} defaultChecked>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
    </Join>
  )
}
AndJoinTogether.args = {
  className: 'border border-base-300 join-item',
  icon: 'arrow',
}

export const Multiple: Story<AccordionProps> = (args) => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Accordion {...args} defaultChecked name="groupA">
          <Accordion.Title className="text-xl font-medium">
            Group A
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
        <Accordion {...args} name="groupA">
          <Accordion.Title className="text-xl font-medium">
            Group A
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
        <Accordion {...args} name="groupA">
          <Accordion.Title className="text-xl font-medium">
            Group A
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
      </div>
      <div className="flex flex-wrap gap-2">
        <Accordion {...args} defaultChecked name="groupB">
          <Accordion.Title className="text-xl font-medium">
            Group B
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
        <Accordion {...args} name="groupB">
          <Accordion.Title className="text-xl font-medium">
            Group B
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
        <Accordion {...args} name="groupB">
          <Accordion.Title className="text-xl font-medium">
            Group B
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
      </div>
    </>
  )
}
Multiple.args = {
  className: 'bg-base-200',
}
