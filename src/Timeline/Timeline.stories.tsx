import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Timeline, { TimelineProps } from '.'

const meta: Meta<TimelineProps> = {
  title: 'Data Display/Timeline',
  component: Timeline,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start>1984</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>1998</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2001</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2007</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start>2015</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  )
}

export const BottomSideOnly: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  )
}

export const TopSideOnly: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iMac</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPhone</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>
  )
}

export const DifferentSides: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>
  )
}

export const ColorfulLines: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end" endClassName="bg-primary">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle className="text-primary" />
      </Timeline.Item>
      <Timeline.Item
        connect="both"
        startClassName="bg-primary"
        endClassName="bg-primary"
      >
        <Timeline.Middle className="text-primary" />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both" startClassName="bg-primary">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle className="text-primary" />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>
  )
}

export const WithoutIcons: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
      </Timeline.Item>
    </Timeline>
  )
}

export const Vertical: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start>1984</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>1998</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2001</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2007</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start>2015</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  )
}
Vertical.args = {
  vertical: true,
}

export const VerticalWithBottomSideOnly: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  )
}
VerticalWithBottomSideOnly.args = {
  vertical: true,
}
export const VerticalWithTopSideOnly: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iMac</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPhone</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>
  )
}
VerticalWithTopSideOnly.args = {
  vertical: true,
}

export const VerticalDifferentSides: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>
  )
}
VerticalDifferentSides.args = {
  vertical: true,
}

export const VerticalColorfulLines: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end" endClassName="bg-primary">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle className="text-primary" />
      </Timeline.Item>
      <Timeline.Item
        connect="both"
        startClassName="bg-primary"
        endClassName="bg-primary"
      >
        <Timeline.Middle className="text-primary" />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both" startClassName="bg-primary">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle className="text-primary" />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>
  )
}
VerticalColorfulLines.args = {
  vertical: true,
}

export const VerticalWithoutIcons: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
      </Timeline.Item>
    </Timeline>
  )
}
VerticalWithoutIcons.args = {
  vertical: true,
}

export const Responsive: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start>1984</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>1998</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2001</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2007</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start>2015</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  )
}
Responsive.args = {
  responsive: true,
}

export const IconSnappedToTheStart: Story<TimelineProps> = (args) => {
  return (
    <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start className="md:text-end mb-10">
          <time className="font-mono italic">1984</time>
          <div className="text-lg font-black">First Macintosh computer</div>
          The Apple Macintosh—later rebranded as the Macintosh 128K—is the
          original Apple Macintosh personal computer. It played a pivotal role
          in establishing desktop publishing as a general office function. The
          motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
          housed in a beige case with integrated carrying handle; it came with a
          keyboard and single-button mouse.
        </Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End box={false} className="mb-10">
          <time className="font-mono italic">1998</time>
          <div className="text-lg font-black">iMac</div>
          iMac is a family of all-in-one Mac desktop computers designed and
          built by Apple Inc. It has been the primary part of Apple's consumer
          desktop offerings since its debut in August 1998, and has evolved
          through seven distinct forms
        </Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start className="md:text-end mb-10">
          <time className="font-mono italic">2001</time>
          <div className="text-lg font-black">iPod</div>
          The iPod is a discontinued series of portable media players and
          multi-purpose mobile devices designed and marketed by Apple Inc. The
          first version was released on October 23, 2001, about 8+1⁄2 months
          after the Macintosh version of iTunes was released. Apple sold an
          estimated 450 million iPod products as of 2022. Apple discontinued the
          iPod product line on May 10, 2022. At over 20 years, the iPod brand is
          the oldest to be discontinued by Apple
        </Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End box={false} className="mb-10">
          <time className="font-mono italic">2007</time>
          <div className="text-lg font-black">iPhone</div>
          iPhone is a line of smartphones produced by Apple Inc. that use
          Apple's own iOS mobile operating system. The first-generation iPhone
          was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since
          then, Apple has annually released new iPhone models and iOS updates.
          As of November 1, 2018, more than 2.2 billion iPhones had been sold.
          As of 2022, the iPhone accounts for 15.6% of global smartphone market
          share
        </Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start className="md:text-end mb-10">
          <time className="font-mono italic">2015</time>
          <div className="text-lg font-black">Apple Watch</div>
          The Apple Watch is a line of smartwatches produced by Apple Inc. It
          incorporates fitness tracking, health-oriented capabilities, and
          wireless telecommunication, and integrates with iOS and other Apple
          products and services
        </Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>
  )
}
IconSnappedToTheStart.args = {
  snap: true,
  vertical: true,
  className: 'max:md:timeline-compact',
}
