import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react-vite'

import Card, { CardProps } from '.'
import Button from '../Button'

export default {
  title: 'Data Display/Card',
  component: Card,
} as Meta

export const Default: Story<CardProps> = (args) => {
  return (
    <Card {...args}>
      <Card.Image
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
      <Card.Body>
        <Card.Title tag="h2">Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions className="justify-end">
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  )
}

export const Responsive: Story<CardProps> = (args) => {
  return (
    <div>
      <div className="mb-3">
        (vertical on small screen, horizontal on large screen)
      </div>
      <Card {...args} side="lg">
        <Card.Image
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        <Card.Body>
          <Card.Title tag="h2">Shoes!</Card.Title>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <Card.Actions className="justify-end">
            <Button color="primary">Buy Now</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  )
}

export const Centered: Story<CardProps> = (args) => {
  return (
    <Card {...args}>
      <Card.Image
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
      <Card.Body className="items-center text-center">
        <Card.Title tag="h2">Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions className="justify-end">
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  )
}

export const ImageOverlay: Story<CardProps> = (args) => {
  return (
    <Card {...args} imageFull>
      <Card.Image
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
      <Card.Body>
        <Card.Title tag="h2">Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions className="justify-end">
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  )
}
