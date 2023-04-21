import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Stats, { StatsProps } from '.'
import Avatar from '../Avatar'
import Button from '../Button'

export default {
  title: 'Data Display/Stats',
  component: Stats,
} as Meta

export const Default: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="shadow">
      <Stats.Stat>
        <Stats.Stat.Title>Total Page Views</Stats.Stat.Title>
        <Stats.Stat.Value>89,400</Stats.Stat.Value>
        <Stats.Stat.Desc>21% more than last month</Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>
  )
}

export const IconsOrImage: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="shadow font-sans">
      <Stats.Stat>
        <Stats.Stat.Figure className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </Stats.Stat.Figure>
        <Stats.Stat.Title>Total Likes</Stats.Stat.Title>
        <Stats.Stat.Value className="text-primary">25.6K</Stats.Stat.Value>
        <Stats.Stat.Desc>21% more than last month</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Figure className="text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </Stats.Stat.Figure>
        <Stats.Stat.Title>Page Views</Stats.Stat.Title>
        <Stats.Stat.Value className="text-secondary">2.6M</Stats.Stat.Value>
        <Stats.Stat.Desc>21% more than last month</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Figure className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </Stats.Stat.Figure>
        <Stats.Stat.Figure className=" text-secondary">
          <Avatar
            size="sm"
            online={true}
            src="https://api.lorem.space/image/face?w=128&h=128"
            shape="circle"
          ></Avatar>
        </Stats.Stat.Figure>
        <Stats.Stat.Value>86%</Stats.Stat.Value>
        <Stats.Stat.Title>Tasks done</Stats.Stat.Title>
        <Stats.Stat.Desc className="text-secondary">
          31 tasks remaining
        </Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>
  )
}

export const CenteredItems: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="shadow font-sans">
      <Stats.Stat className="place-items-center">
        <Stats.Stat.Title>Downloads</Stats.Stat.Title>
        <Stats.Stat.Value>31K</Stats.Stat.Value>
        <Stats.Stat.Desc>From January 1st to February 1st</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stats.Stat.Title>Users</Stats.Stat.Title>
        <Stats.Stat.Value className="text-secondary">4,200</Stats.Stat.Value>
        <Stats.Stat.Desc className="text-secondary">↗︎ 40 (2%)</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stats.Stat.Title>New Registers</Stats.Stat.Title>
        <Stats.Stat.Value>1,200</Stats.Stat.Value>
        <Stats.Stat.Desc>↘︎ 90 (14%)</Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>
  )
}

export const Vertical: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="shadow font-sans">
      <Stats.Stat>
        <Stats.Stat.Title>Downloads</Stats.Stat.Title>
        <Stats.Stat.Value>31K</Stats.Stat.Value>
        <Stats.Stat.Desc>Jan 1st - Feb 1st</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Title>New Users</Stats.Stat.Title>
        <Stats.Stat.Value>4,200</Stats.Stat.Value>
        <Stats.Stat.Desc>↗︎ 400 (22%)</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Title>New Registers</Stats.Stat.Title>
        <Stats.Stat.Value>1,200</Stats.Stat.Value>
        <Stats.Stat.Desc>↘︎ 90 (14%)</Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>
  )
}
Vertical.args = {
  direction: 'vertical',
}

export const Responsive: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="lg:stats-horizontal shadow">
      <Stats.Stat>
        <Stats.Stat.Title>Downloads</Stats.Stat.Title>
        <Stats.Stat.Value>31K</Stats.Stat.Value>
        <Stats.Stat.Desc>Jan 1st - Feb 1st</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Title>New Users</Stats.Stat.Title>
        <Stats.Stat.Value>4,200</Stats.Stat.Value>
        <Stats.Stat.Desc>↗︎ 400 (22%)</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Title>New Registers</Stats.Stat.Title>
        <Stats.Stat.Value>1,200</Stats.Stat.Value>
        <Stats.Stat.Desc>↘︎ 90 (14%)</Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>
  )
}

export const CustomColorsAndButton: Story<StatsProps> = (args) => {
  return (
    <Stats {...args} className="font-sans bg-primary text-primary-content">
      <Stats.Stat>
        <Stats.Stat.Title>Account balance</Stats.Stat.Title>
        <Stats.Stat.Value>$89,400</Stats.Stat.Value>
        <Stats.Stat.Actions>
          <Button size="sm" color="success">
            Add funds
          </Button>
        </Stats.Stat.Actions>
      </Stats.Stat>
      <Stats.Stat>
        <Stats.Stat.Title>Current balance</Stats.Stat.Title>
        <Stats.Stat.Value>$89,400</Stats.Stat.Value>
        <Stats.Stat.Actions className="gap-1 flex">
          <Button size="sm">Withdrawal</Button>
          <Button size="sm">deposit</Button>
        </Stats.Stat.Actions>
      </Stats.Stat>
    </Stats>
  )
}
