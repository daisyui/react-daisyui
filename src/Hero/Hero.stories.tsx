import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Hero, { HeroProps } from '.'
import Button from '../Button'
import Card from '../Card'
import Input from '../Input'
import Form from '../Form'
import Link from '../Link'

export default {
  title: 'Layout/Hero',
  component: Hero,
  args: {
    className: 'bg-base-200 ',
  },
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

          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  )
}

export const HeroWithFigure: Story<HeroProps> = (args) => {
  return (
    <Hero {...args}>
      <Hero.Content>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  )
}

export const HeroWithForm: Story<HeroProps> = (args) => {
  return (
    <Hero {...args}>
      <Hero.Content className="flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Card.Body>
            <Form>
              <Form.Label title="Email" />
              <Input
                type="text"
                placeholder="email"
                className="input-bordered"
              />
            </Form>
            <Form>
              <Form.Label title="Password" />
              <Input
                type="text"
                placeholder="password"
                className="input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt" hover>
                  Forgot password?
                </Link>
              </label>
            </Form>
            <Form className="mt-6">
              <Button>Login</Button>
            </Form>
          </Card.Body>
        </Card>
      </Hero.Content>
    </Hero>
  )
}

export const HeroWithOverlayImage: Story<HeroProps> = (args) => {
  return (
    <Hero
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}
    >
      <Hero.Overlay {...args} />
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  )
}

HeroWithOverlayImage.args = { className: 'bg-opacity-60' }
Default.args = {}
