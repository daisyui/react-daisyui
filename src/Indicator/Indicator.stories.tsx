import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Indicator, { IndicatorItemProps } from '.'
import Avatar from '../Avatar'
import Badge from '../Badge'
import Button from '../Button'
import Tabs from '../Tabs'
import Input from '../Input'
import Card from '../Card'

export default {
  title: 'Layout/Indicator',
  component: Indicator.Item,
} as Meta

export const Default: Story<IndicatorItemProps> = (args) => {
  return (
    <Indicator>
      <Indicator.Item {...args} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>
  )
}
Default.args = {
  className: 'badge badge-secondary',
}

export const BadgeWithText: Story<IndicatorItemProps> = (args) => {
  return (
    <Indicator>
      <Badge color="primary" className={Indicator.Item.className(args)}>
        new
      </Badge>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>
  )
}

export const ForButton: Story<IndicatorItemProps> = (args) => {
  return (
    <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)}>
        99+
      </Badge>
      <Button>inbox</Button>
    </Indicator>
  )
}

export const ForTab: Story<IndicatorItemProps> = (args) => {
  return (
    <Tabs variant="lifted" value={1}>
      <Tabs.Tab value={0}>Messages</Tabs.Tab>
      <Tabs.Tab className={Indicator.className()} value={1}>
        Notifications
        <Indicator.Item {...args}>8</Indicator.Item>
      </Tabs.Tab>
      <Tabs.Tab value={2}>Request</Tabs.Tab>
    </Tabs>
  )
}
ForTab.args = {
  className: 'badge',
}

export const ForAvatar: Story<IndicatorItemProps> = (args) => {
  return (
    <Indicator>
      <Badge className={Indicator.Item.className(args)} color="secondary">
        typing…
      </Badge>
      <Avatar
        shape="square"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      />
    </Indicator>
  )
}

export const ForInput: Story<IndicatorItemProps> = (args) => {
  return (
    <Indicator>
      <Indicator.Item {...args}>Required</Indicator.Item>
      <Input placeholder="Your email address" bordered />
    </Indicator>
  )
}
ForInput.args = {
  className: 'badge',
}

export const ButtonAsIndicatorForCard: Story<IndicatorItemProps> = (args) => {
  return (
    <Indicator className="my-6 mx-10">
      <Button color="primary" className={Indicator.Item.className(args)}>
        Apply
      </Button>
      <Card bordered className="bg-base-100">
        <Card.Body>
          <Card.Title>Job Title</Card.Title>
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </Card.Body>
      </Card>
    </Indicator>
  )
}
ButtonAsIndicatorForCard.args = {
  vertical: 'bottom',
}

export const InCenterOfImage: Story<IndicatorItemProps> = (args) => {
  return (
    <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)}>
        Uploading Image...
      </Badge>
      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
    </Indicator>
  )
}
InCenterOfImage.args = {
  vertical: 'middle',
  horizontal: 'center',
}

const Template: Story<IndicatorItemProps> = (args) => {
  return (
    <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>
  )
}

export const TopAndStart: Story<IndicatorItemProps> = Template.bind({})
TopAndStart.args = {
  horizontal: 'start',
}
export const TopAndCenter: Story<IndicatorItemProps> = Template.bind({})
TopAndCenter.args = {
  horizontal: 'center',
}
export const TopAndEnd: Story<IndicatorItemProps> = Template.bind({})

export const MiddleAndStart: Story<IndicatorItemProps> = Template.bind({})
MiddleAndStart.args = {
  horizontal: 'start',
  vertical: 'middle',
}
export const MiddleAndCenter: Story<IndicatorItemProps> = Template.bind({})
MiddleAndCenter.args = {
  horizontal: 'center',
  vertical: 'middle',
}
export const MiddleAndEnd: Story<IndicatorItemProps> = Template.bind({})
MiddleAndEnd.args = {
  vertical: 'middle',
}

export const BottomAndStart: Story<IndicatorItemProps> = Template.bind({})
BottomAndStart.args = {
  horizontal: 'start',
  vertical: 'bottom',
}
export const BottomAndCenter: Story<IndicatorItemProps> = Template.bind({})
BottomAndCenter.args = {
  horizontal: 'center',
  vertical: 'bottom',
}
export const BottomAndEnd: Story<IndicatorItemProps> = Template.bind({})
BottomAndEnd.args = {
  vertical: 'bottom',
}

export const Multiple: Story<IndicatorItemProps> = (args) => {
  return (
    <Indicator {...args}>
      <Badge
        color="secondary"
        className={Indicator.Item.className({
          vertical: 'top',
          horizontal: 'start',
        })}
      >
        top+start
      </Badge>
      <Badge
        color="secondary"
        className={Indicator.Item.className({
          vertical: 'top',
          horizontal: 'center',
        })}
      >
        top+center
      </Badge>
      <Badge
        color="secondary"
        className={Indicator.Item.className({
          vertical: 'top',
          horizontal: 'end',
        })}
      >
        top+end
      </Badge>

      <Badge
        color="secondary"
        className={Indicator.Item.className({
          vertical: 'middle',
          horizontal: 'start',
        })}
      >
        middle+start
      </Badge>
      <Badge
        color="secondary"
        className={Indicator.Item.className({
          vertical: 'middle',
          horizontal: 'center',
        })}
      >
        middle+center
      </Badge>
      <Badge
        color="secondary"
        className={Indicator.Item.className({
          vertical: 'middle',
          horizontal: 'end',
        })}
      >
        middle+end
      </Badge>

      <Badge
        color="secondary"
        className={Indicator.Item.className({
          vertical: 'bottom',
          horizontal: 'start',
        })}
      >
        bottom+start
      </Badge>
      <Badge
        color="secondary"
        className={Indicator.Item.className({
          vertical: 'bottom',
          horizontal: 'center',
        })}
      >
        bottom+center
      </Badge>
      <Badge
        color="secondary"
        className={Indicator.Item.className({
          vertical: 'bottom',
          horizontal: 'end',
        })}
      >
        bottom+end
      </Badge>

      <div className="grid w-60 h-32 bg-base-300 place-items-center">
        content
      </div>
    </Indicator>
  )
}
Multiple.argTypes = {
  horizontal: {
    control: false,
  },
  vertical: {
    control: false,
  },
}

export const Responsive: Story<IndicatorItemProps> = Template.bind({})
Responsive.args = {
  className:
    'sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end',
  horizontal: 'start',
}

export const ResponsiveNotificationBubble: Story<IndicatorProps> = (args) => {
  return <Indicator {...args} />
}

ResponsiveNotificationBubble.args = {
  children: (
    <Avatar src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
  ),
  item: <Badge responsive={true} color="success" children={<div>7</div>} />,
}