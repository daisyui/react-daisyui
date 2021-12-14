import React from 'react'
import { Story, Meta } from '@storybook/react'

import Carousel, { CarouselProps } from '.'

export default {
  title: 'Carousel',
  component: Carousel,
} as Meta

export const Default: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args}>
      <Carousel.Item src="https://picsum.photos/id/500/256/144"/>
      <Carousel.Item src="https://picsum.photos/id/501/256/144"/>
      <Carousel.Item src="https://picsum.photos/id/502/256/144"/>
      <Carousel.Item src="https://picsum.photos/id/503/256/144"/>
      <Carousel.Item src="https://picsum.photos/id/504/256/144"/>
      <Carousel.Item src="https://picsum.photos/id/505/256/144"/>
      <Carousel.Item src="https://picsum.photos/id/506/256/144"/>
    </Carousel>
  )
}
Default.args = {}