import React from 'react'
import { Story, Meta } from '@storybook/react'

import Hero, { HeroProps } from '.'

export default {
  title: 'Layout/Hero',
  component: Hero,
} as Meta

export const Default: Story<HeroProps> = (args) => {
  return (
    <Hero {...args}>
      <Hero.Overlay className="bg-opacity-60" />
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </Hero.Content>
    </Hero>
  )
}

Default.args = {}
