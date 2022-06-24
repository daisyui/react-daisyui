import React from 'react'
import { Story, Meta } from '@storybook/react'

import Tabs, { TabsProps } from '.'

const { Tab } = Tabs

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    controls: { exclude: ['ref'] },
  },
  args: {
    value: 1,
  },
} as Meta

export const Default: Story<TabsProps<number>> = (args) => {
  return (
    <Tabs {...args}>
      <Tab value={0}>Tab 1</Tab>
      <Tab value={1}>Tab 2</Tab>
      <Tab value={2}>Tab 3</Tab>
    </Tabs>
  )
}

export const Sizes: Story<TabsProps<number>> = ({ size, ...args }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Tabs {...args} size="xs">
        <Tab value={0}>Tiny</Tab>
        <Tab value={1}>Tiny</Tab>
        <Tab value={2}>Tiny</Tab>
      </Tabs>
      <Tabs {...args} size="sm">
        <Tab value={0}>Small</Tab>
        <Tab value={1}>Small</Tab>
        <Tab value={2}>Small</Tab>
      </Tabs>
      <Tabs {...args} size="md">
        <Tab value={0}>Normal</Tab>
        <Tab value={1}>Normal</Tab>
        <Tab value={2}>Normal</Tab>
      </Tabs>
      <Tabs {...args} size="lg">
        <Tab value={0}>Large</Tab>
        <Tab value={1}>Large</Tab>
        <Tab value={2}>Large</Tab>
      </Tabs>
    </div>
  )
}
