import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Mask, { MaskProps } from '.'

export default {
  title: 'Layout/Mask',
  component: Mask,
} as Meta

export const Default: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}

Default.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'squircle',
}

export const MaskHeart: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
MaskHeart.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'heart',
}

export const Hexagon: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Hexagon.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'hexagon',
}

export const HexagonTwo: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
HexagonTwo.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'hexagon-2',
}

export const Decagon: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Decagon.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'decagon',
}

export const Pentagon: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Pentagon.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'pentagon',
}
export const Diamond: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Diamond.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'diamond',
}

export const Square: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Square.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'square',
}
export const Circle: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Circle.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'circle',
}
export const Parallelogram: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Parallelogram.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'parallelogram',
}
export const ParallelogramTwo: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
ParallelogramTwo.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'parallelogram-2',
}
export const ParallelogramThree: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
ParallelogramThree.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'parallelogram-3',
}
export const ParallelogramFour: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
ParallelogramFour.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'parallelogram-4',
}
export const Star: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Star.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'star',
}
export const StarTwo: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
StarTwo.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'star-2',
}
export const Triangle: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Triangle.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'triangle',
}
export const TriangleTwo: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
TriangleTwo.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'triangle-2',
}
export const TriangleThree: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
TriangleThree.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'triangle-3',
}

export const TriangleFour: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
TriangleFour.args = {
  src: 'https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg',
  variant: 'triangle-4',
}
