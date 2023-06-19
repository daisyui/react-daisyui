import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Loading, { LoadingProps } from '.'

const meta: Meta = {
  title: 'Data Display/Loading',
  component: Loading,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta

const Template: Story<LoadingProps> = (args) => {
  return <Loading {...args} />
}
export const Default = Template.bind({})
Default.args = {
  variant: 'spinner',
}

export const Colors: Story<LoadingProps> = (args) => {
  return (
    <div>
      <div>
        <Loading {...args} />
        <Loading {...args} color="primary" />
        <Loading {...args} color="secondary" />
        <Loading {...args} color="success" />
        <Loading {...args} color="warning" />
        <Loading {...args} color="error" />
        <Loading {...args} color="info" />
        <Loading {...args} color="accent" />
        <Loading {...args} color="ghost" />
      </div>
    </div>
  )
}
Colors.args = {
  className: "m-1"
}

export const Variants: Story<LoadingProps> = (args) => {
  return (
    <div className="flex gap-x-2">
      <Loading {...args} />
      <Loading {...args} variant="dots" />
      <Loading {...args} variant="ring" />
      <Loading {...args} variant="ball" />
      <Loading {...args} variant="bars" />
      <Loading {...args} variant="infinity" />
    </div>
  )
}

export const Sizes: Story<LoadingProps> = (args) => {
  return (
    <div>
      <div>
        <Loading {...args} size="xs" />
        <Loading {...args} size="sm" />
        <Loading {...args} size="md" />
        <Loading {...args} size="lg" />
      </div>
    </div>
  )
}