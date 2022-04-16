import React from 'react'
import { Story, Meta } from '@storybook/react'

import Carousel, { CarouselProps } from '.'
import Button from '../Button'

export default {
  title: 'Data Display/Carousel',
  component: Carousel,
} as Meta

export const Default: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args} className="rounded-box">
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094"
        alt="Burger"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A"
        alt="Burger"
      />
    </Carousel>
  )
}
Default.args = {}

export const Snap: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args} className="rounded-box">
      <Carousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=8B7BCDC2"
        alt="Drinks"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=500B67FB"
        alt="Drinks"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=A89D0DE6"
        alt="Drinks"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=225E6693"
        alt="Drinks"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=9D9539E7"
        alt="Drinks"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=BDC01094"
        alt="Drinks"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/drink?w=400&h=300&hash=7F5AE56A"
        alt="Drinks"
      />
    </Carousel>
  )
}
Snap.args = {
  snap: 'end',
}

export const FullWidth: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args} className="w-64 rounded-box">
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A"
        alt="Videogame Poster"
      />
    </Carousel>
  )
}
FullWidth.args = {
  width: 'full',
}

export const HalfWidth: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args} className="w-64 rounded-box">
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A"
        alt="Videogame Poster"
      />
    </Carousel>
  )
}
HalfWidth.args = {
  width: 'half',
}

export const Vertical: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args} className="h-96 w-64 rounded-box">
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094"
        alt="Videogame Poster"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A"
        alt="Videogame Poster"
      />
    </Carousel>
  )
}
Vertical.args = {
  width: 'full',
  vertical: true,
}

export const Numbered: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args} className="rounded-box">
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
        alt="Car"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
        alt="Car"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
        alt="Car"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
        alt="Car"
      />
    </Carousel>
  )
}
Numbered.args = {
  display: 'numbered',
}

export const Sequential: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args} className="rounded-box">
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
        alt="Car"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
        alt="Car"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
        alt="Car"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
        alt="Car"
      />
    </Carousel>
  )
}
Sequential.args = {
  display: 'sequential',
}

export const CustomButton: Story<CarouselProps> = (args) => {
  const buttonStyle = (value: string) => {
    return <Button color="primary">{value}</Button>
  }

  args.buttonStyle = buttonStyle

  return (
    <Carousel {...args} className="rounded-box">
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
        alt="Car"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
        alt="Car"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
        alt="Car"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
        alt="Car"
      />
    </Carousel>
  )
}
CustomButton.args = {
  display: 'sequential',
}
