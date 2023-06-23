import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Join, { JoinProps } from '.'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'
import Indicator from '../Indicator'
import Badge from '../Badge'

export default {
  title: 'Layout/Join (group items)',
  component: Join,
} as Meta

export const Default: Story<JoinProps> = (args) => {
  return (
    <Join {...args}>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
    </Join>
  )
}
Default.args = {}

export const Vertically: Story<JoinProps> = (args) => {
  return (
    <Join {...args}>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
    </Join>
  )
}
Vertically.args = {
  vertical: true,
}

export const ExtraElementsInTheGroup: Story<JoinProps> = (args) => {
  return (
    <Join {...args}>
      <div>
        <div>
          <Input className="join-item" placeholder="Search..." />
        </div>
      </div>
      <Select className="join-item">
        <Select.Option selected disabled>
          Category
        </Select.Option>
        <Select.Option>Sci-fi</Select.Option>
        <Select.Option>Drama</Select.Option>
        <Select.Option>Action</Select.Option>
      </Select>
      <Indicator item={<Badge color="secondary">new</Badge>}>
        <Button className="join-item">Search</Button>
      </Indicator>
    </Join>
  )
}
ExtraElementsInTheGroup.args = {}

export const CustomBorderRadius: Story<JoinProps> = (args) => {
  return (
    <Join {...args}>
      <Input className="join-item" placeholder="Email" />
      <Button className="join-item rounded-r-full">Subscribe</Button>
    </Join>
  )
}
CustomBorderRadius.args = {}

export const RadioInputsWithBtnStyle: Story<JoinProps> = (args) => {
  return (
    <Join {...args}>
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Radio 1"
      />
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Radio 2"
      />
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Radio 3"
      />
    </Join>
  )
}
RadioInputsWithBtnStyle.args = {}
