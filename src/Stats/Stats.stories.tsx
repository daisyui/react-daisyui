import React from 'react'
import { Story, Meta } from '@storybook/react'

import Stats, { StatsProps } from '.'
import Stat from './Stat'

export default {
  title: 'Data Display/Stats',
  component: Stats,
} as Meta

export const Default: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="bg-base-200 shadow">
      <Stats.Stat>
        <Stat.Item variant="title">Total Page Views</Stat.Item>
        <Stat.Item variant="value">89,400</Stat.Item>
        <Stat.Item variant="desc">21% more than last month</Stat.Item>
      </Stats.Stat>
    </Stats>
  )
}

Default.args = {}
