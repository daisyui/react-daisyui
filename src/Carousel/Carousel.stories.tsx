import React from 'react'
import { Story, Meta } from '@storybook/react'

import Carousel, { CarouselProps } from '.'

export default {
  title: 'Data Display/Carousel',
  component: Carousel,
} as Meta

export const Default: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args}>
      <Carousel.Item src="https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2" alt="Burger" />
      <Carousel.Item src="https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB" alt="Burger" />
      <Carousel.Item src="https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6" alt="Burger" />
      <Carousel.Item src="https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693" alt="Burger" />
      <Carousel.Item src="https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7" alt="Burger" />
      <Carousel.Item src="https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094" alt="Burger" />
      <Carousel.Item src="https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A" alt="Burger" />
    </Carousel>
  )
}
Default.args = {}
