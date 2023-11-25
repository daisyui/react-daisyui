import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Tabs, { TabsProps } from '.'

const { Tab, RadioTab } = Tabs

const meta: Meta<TabsProps> = {
  title: 'Navigation/Tabs',
  component: Tabs,
}

export default meta

const Template: Story<TabsProps> = (args) => {
  return (
    <Tabs {...args}>
      <Tab>Tab 1</Tab>
      <Tab active={true}>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>
  )
}

export const Default: Story<TabsProps> = Template.bind({})
export const Bordered: Story<TabsProps> = Template.bind({})
Bordered.args = {
  variant: 'bordered',
}
export const Lifted: Story<TabsProps> = Template.bind({})
Lifted.args = {
  variant: 'lifted',
}

export const Boxed: Story<TabsProps> = Template.bind({})
Boxed.args = {
  variant: 'boxed',
}

export const Sizes: Story<TabsProps> = ({ size, ...args }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/*xs*/}
      <Tabs {...args} size="xs">
        <Tab>Tiny</Tab>
        <Tab active={true}>Tiny</Tab>
        <Tab>Tiny</Tab>
      </Tabs>
      {/*sm*/}
      <Tabs {...args} size="sm">
        <Tab>Small</Tab>
        <Tab active={true}>Small</Tab>
        <Tab>Small</Tab>
      </Tabs>
      {/*md*/}
      <Tabs {...args} size="md">
        <Tab>Normal</Tab>
        <Tab active={true}>Normal</Tab>
        <Tab>Normal</Tab>
      </Tabs>
      {/*lg*/}
      <Tabs {...args} size="lg">
        <Tab>Large</Tab>
        <Tab active={true}>Large</Tab>
        <Tab>Large</Tab>
      </Tabs>
    </div>
  )
}
Sizes.argTypes = {
  size: {
    control: false,
  },
}
Sizes.args = {
  variant: 'lifted',
}

export const RadioTabBordered: Story<TabsProps> = (args) => {
  return (
    <Tabs {...args}>
      <RadioTab name="my_tabs_1" label="Tab 1" contentClassName="p-10">
        Tab content 1
      </RadioTab>
      <RadioTab
        name="my_tabs_1"
        label="Tab 2"
        contentClassName="p-10"
        defaultChecked={true}
      >
        Tab content 2
      </RadioTab>
      <RadioTab name="my_tabs_1" label="Tab 3" contentClassName="p-10">
        Tab content 3
      </RadioTab>
    </Tabs>
  )
}
RadioTabBordered.args = {
  variant: 'bordered',
}

export const RadioTabLifted: Story<TabsProps> = (args) => {
  return (
    <Tabs {...args}>
      <RadioTab
        name="my_tabs_2"
        label="Tab 1"
        contentClassName="bg-base-100 border-base-300 rounded-box p-6"
      >
        Tab content 1
      </RadioTab>
      <RadioTab
        name="my_tabs_2"
        label="Tab 2"
        contentClassName="bg-base-100 border-base-300 rounded-box p-6"
        defaultChecked={true}
      >
        Tab content 2
      </RadioTab>
      <RadioTab
        name="my_tabs_2"
        label="Tab 3"
        contentClassName="bg-base-100 border-base-300 rounded-box p-6"
      >
        Tab content 3
      </RadioTab>
    </Tabs>
  )
}
RadioTabLifted.args = {
  className: 'w-full my-10 lg:mx-10',
  variant: 'lifted',
}
