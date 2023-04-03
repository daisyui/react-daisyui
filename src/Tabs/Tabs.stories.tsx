import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

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

const Template: Story<TabsProps<number>> = (args) => {
  const [tabValue, setTabValue] = React.useState(0)
  return (
    <Tabs {...args} value={tabValue} onChange={setTabValue}>
      <Tab value={0}>Tab 1</Tab>
      <Tab value={1}>Tab 2</Tab>
      <Tab value={2}>Tab 3</Tab>
    </Tabs>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Bordered = Template.bind({})
Bordered.args = { variant: 'bordered' }

export const Lifted = Template.bind({})
Lifted.args = { variant: 'lifted' }

export const Boxed = Template.bind({})
Boxed.args = { boxed: true }

export const Sizes: Story<TabsProps<number>> = ({ size, ...args }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
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
Sizes.args = { variant: 'lifted' }
