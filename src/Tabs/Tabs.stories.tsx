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

Default.args = {}
