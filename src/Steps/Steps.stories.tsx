import React from 'react'
import { Story, Meta } from '@storybook/react'

import Steps, { StepsProps } from '.'

export default {
  title: 'Navigation/Steps',
  component: Steps,
} as Meta

export const Default: Story<StepsProps> = (args) => {
  return (
    <Steps {...args}>
      <Steps.Step color="info">Fly to moon</Steps.Step>
      <Steps.Step color="info">Shrink the moon</Steps.Step>
      <Steps.Step color="info">Grab the moon</Steps.Step>

      <Steps.Step value="?" color="error">
        Sit on toilet
      </Steps.Step>
    </Steps>
  )
}

Default.args = {}
