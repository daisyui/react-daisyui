import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react-vite'

import Divider, { DividerProps } from '.'
import Card from '../Card'

const meta: Meta<DividerProps> = {
  title: 'Layout/Divider',
  component: Divider,
  args: {
    children: 'OR',
  },
}
export default meta

export const Default: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>
  )
}
Default.args = {}

export const Horizontal: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex w-full ">
      <Card className="grid h-20 flex-grow bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid h-20 flex-grow bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>
  )
}
Horizontal.args = {
  horizontal: true,
}

export const NoText: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex flex-col w-full">
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>
  )
}
NoText.args = {
  children: '',
}

export const Responsive: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>
  )
}
Responsive.args = {
  responsive: true,
}

export const Colors: Story<DividerProps> = ({ children, color, ...args }) => {
  return (
    <div className="flex flex-col w-full">
      <Divider {...args}>Default</Divider>
      <Divider {...args} color="neutral">
        Neutral
      </Divider>
      <Divider {...args} color="primary">
        Primary
      </Divider>
      <Divider {...args} color="secondary">
        Secondary
      </Divider>
      <Divider {...args} color="accent">
        Accent
      </Divider>
      <Divider {...args} color="success">
        Success
      </Divider>
      <Divider {...args} color="warning">
        Warning
      </Divider>
      <Divider {...args} color="info">
        Info
      </Divider>
      <Divider {...args} color="error">
        Error
      </Divider>
    </div>
  )
}
Colors.argTypes = {
  children: {
    control: false,
  },
  color: {
    control: false,
  },
}

export const DifferentPositions: Story<DividerProps> = ({
  children,
  start,
  end,
  ...args
}) => {
  return (
    <div className="flex flex-col w-full">
      <Divider {...args} start={true}>
        Start
      </Divider>
      <Divider {...args}>Default</Divider>
      <Divider {...args} end={true}>
        End
      </Divider>
    </div>
  )
}
DifferentPositions.argTypes = {
  children: {
    control: false,
  },
  start: {
    control: false,
  },
  end: {
    control: false,
  },
}

export const DifferentPositionsHorizontal: Story<DividerProps> = ({
  children,
  start,
  end,
  ...args
}) => {
  return (
    <div className="flex w-full justify-center h-52">
      <Divider {...args} start={true}>
        Start
      </Divider>
      <Divider {...args}>Default</Divider>
      <Divider {...args} end={true}>
        End
      </Divider>
    </div>
  )
}
DifferentPositionsHorizontal.argTypes = {
  children: {
    control: false,
  },
  start: {
    control: false,
  },
  end: {
    control: false,
  },
}

DifferentPositionsHorizontal.args = {
  horizontal: true,
}
