import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react-vite'

import Mask, { MaskProps } from '.'

export default {
  title: 'Layout/Mask',
  component: Mask,
} as Meta

export const Default: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}

Default.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'squircle',
}

export const MaskHeart: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
MaskHeart.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'heart',
}

export const Hexagon: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Hexagon.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'hexagon',
}

export const HexagonTwo: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
HexagonTwo.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'hexagon-2',
}

export const Decagon: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Decagon.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'decagon',
}

export const Pentagon: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Pentagon.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'pentagon',
}
export const Diamond: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Diamond.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'diamond',
}

export const Square: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Square.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'square',
}
export const Circle: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Circle.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'circle',
}
export const Star: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Star.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'star',
}
export const StarTwo: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
StarTwo.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'star-2',
}
export const Triangle: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
Triangle.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'triangle',
}
export const TriangleTwo: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
TriangleTwo.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'triangle-2',
}
export const TriangleThree: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
TriangleThree.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'triangle-3',
}

export const TriangleFour: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}
TriangleFour.args = {
  src: 'https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp',
  variant: 'triangle-4',
}
