import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

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
        src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        alt="Fruits"
      />
    </Carousel>
  )
}
Default.args = {}

export const Snap: Story<CarouselProps> = (args) => {
  return (
    <Carousel {...args} className="rounded-box">
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        alt="Fruits"
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
        src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        alt="Fruits"
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
        src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        alt="Fruits"
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
        src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        alt="Fruits"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        alt="Fruits"
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
        src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
        alt="City"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
        alt="City"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
        alt="City"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
        alt="City"
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
        src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
        alt="City"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
        alt="City"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
        alt="City"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
        alt="City"
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
        src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
        alt="City"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
        alt="City"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
        alt="City"
      />
      <Carousel.Item
        src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
        alt="City"
      />
    </Carousel>
  )
}
CustomButton.args = {
  display: 'sequential',
}
