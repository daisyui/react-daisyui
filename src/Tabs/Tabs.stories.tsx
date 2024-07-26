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
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
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
        <Tabs.Tab>Tiny</Tabs.Tab>
        <Tabs.Tab active={true}>Tiny</Tabs.Tab>
        <Tabs.Tab>Tiny</Tabs.Tab>
      </Tabs>
      {/*sm*/}
      <Tabs {...args} size="sm">
        <Tabs.Tab>Small</Tabs.Tab>
        <Tabs.Tab active={true}>Small</Tabs.Tab>
        <Tabs.Tab>Small</Tabs.Tab>
      </Tabs>
      {/*md*/}
      <Tabs {...args} size="md">
        <Tabs.Tab>Normal</Tabs.Tab>
        <Tabs.Tab active={true}>Normal</Tabs.Tab>
        <Tabs.Tab>Normal</Tabs.Tab>
      </Tabs>
      {/*lg*/}
      <Tabs {...args} size="lg">
        <Tabs.Tab>Large</Tabs.Tab>
        <Tabs.Tab active={true}>Large</Tabs.Tab>
        <Tabs.Tab>Large</Tabs.Tab>
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
      <Tabs.RadioTab name="my_tabs_1" label="Tab 1" contentClassName="p-10">
        Tab content 1
      </Tabs.RadioTab>
      <Tabs.RadioTab
        name="my_tabs_1"
        label="Tab 2"
        contentClassName="p-10"
        defaultChecked={true}
      >
        Tab content 2
      </Tabs.RadioTab>
      <Tabs.RadioTab name="my_tabs_1" label="Tab 3" contentClassName="p-10">
        Tab content 3
      </Tabs.RadioTab>
    </Tabs>
  )
}
RadioTabBordered.args = {
  variant: 'bordered',
}

export const RadioTabLifted: Story<TabsProps> = (args) => {
  return (
    <Tabs {...args}>
      <Tabs.RadioTab
        name="my_tabs_2"
        label="Tab 1"
        contentClassName="bg-base-100 border-base-300 rounded-box p-6"
      >
        Tab content 1
      </Tabs.RadioTab>
      <Tabs.RadioTab
        name="my_tabs_2"
        label="Tab 2"
        contentClassName="bg-base-100 border-base-300 rounded-box p-6"
        defaultChecked={true}
      >
        Tab content 2
      </Tabs.RadioTab>
      <Tabs.RadioTab
        name="my_tabs_2"
        label="Tab 3"
        contentClassName="bg-base-100 border-base-300 rounded-box p-6"
      >
        Tab content 3
      </Tabs.RadioTab>
    </Tabs>
  )
}
RadioTabLifted.args = {
  className: 'w-full my-10 lg:mx-10',
  variant: 'lifted',
}

export const TabsWithCustomColor: Story<TabsProps> = (args) => {
  return (
    <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab color="primary" bgColor="yellow" borderColor="orange" active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>
  )
}
TabsWithCustomColor.args = {
  className: 'w-full my-10 lg:mx-10',
  variant: 'lifted',
}

