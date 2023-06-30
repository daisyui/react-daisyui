import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import InputGroup, { InputGroupProps } from '.'
import Form from '../Form'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

export default {
  title: 'Layout/InputGroup (Deprecated)',
  component: InputGroup,
} as Meta

export const Default: Story<InputGroupProps> = (args) => {
  return (
    <Form>
      <Form.Label title="Enter amount"></Form.Label>

      <InputGroup {...args}>
        <span>Price</span>
        <Input type="text" placeholder="10" bordered />
        <span>USD</span>
      </InputGroup>
    </Form>
  )
}

Default.args = {}

export const HorizontalGroupLabelAndTextInput: Story<InputGroupProps> = (
  args
) => {
  return (
    <Form>
      <Form.Label title="Your Email" />

      <InputGroup {...args}>
        <span>Email</span>
        <Input type="text" placeholder="sample@email.com" bordered />
      </InputGroup>
    </Form>
  )
}

export const VerticalGroupLabelAndTextInput: Story<InputGroupProps> = (
  args
) => {
  return (
    <Form>
      <Form.Label title="Your Email" />

      <InputGroup {...args}>
        <span>Email</span>
        <Input type="text" placeholder="Email here" bordered />
      </InputGroup>
    </Form>
  )
}
VerticalGroupLabelAndTextInput.args = {
  vertical: true,
}

export const Sizes: Story<InputGroupProps> = (args) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Form className="my-1">
        <InputGroup size="lg">
          <span>LG</span>
          <Input type="text" placeholder="Type here" bordered size="lg" />
        </InputGroup>
      </Form>
      <Form className="my-1">
        <InputGroup size="md">
          <span>MD</span>
          <Input type="text" placeholder="Type here" bordered size="md" />
        </InputGroup>
      </Form>{' '}
      <Form className="my-1">
        <InputGroup size="sm">
          <span>SM</span>
          <Input type="text" placeholder="Type here" bordered size="sm" />
        </InputGroup>
      </Form>
      <Form className="my-1">
        <InputGroup size="xs">
          <span>XS</span>
          <Input type="text" placeholder="Type here" bordered size="xs" />
        </InputGroup>
      </Form>
    </div>
  )
}

export const GroupSelectAndButton: Story<InputGroupProps> = (args) => {
  return (
    <Form>
      <InputGroup {...args}>
        <Select bordered>
          <Select.Option value={undefined} disabled selected>
            Pick your favorite framework
          </Select.Option>
          <Select.Option value={'React'}>React</Select.Option>
          <Select.Option value={'Nextjs'}>Nextjs</Select.Option>
          <Select.Option value={'Remix'}>Remix</Select.Option>
          <Select.Option value={'Solidjs'}>Solidjs</Select.Option>
        </Select>
        <Button>Submit</Button>
      </InputGroup>
    </Form>
  )
}
