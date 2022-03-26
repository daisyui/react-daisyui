import React from 'react'
import { Story, Meta } from '@storybook/react'

import Carousel, { CarouselProps } from '.'

export default {
  title: 'Data Display/Carousel',
  component: Carousel,
} as Meta

const Template: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args}>
      <Carousel.Item src="https://picsum.photos/id/500/256/144" />
      <Carousel.Item src="https://picsum.photos/id/501/256/144" />
      <Carousel.Item src="https://picsum.photos/id/502/256/144" />
      <Carousel.Item src="https://picsum.photos/id/503/256/144" />
      <Carousel.Item src="https://picsum.photos/id/504/256/144" />
      <Carousel.Item src="https://picsum.photos/id/505/256/144" />
      <Carousel.Item src="https://picsum.photos/id/506/256/144" />
    </Carousel>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Vertical = Template.bind({})
Vertical.args = { vertical: true, className: 'max-h-96' }

export const IndicatorButtons = Template.bind({})
IndicatorButtons.args = { indicatorButtons: true }
