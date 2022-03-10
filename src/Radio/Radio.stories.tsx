import React from 'react'
import { Story, Meta } from '@storybook/react'

import Radio, { RadioProps } from '.'
import Form from '../Form'

export default {
  title: 'Data Input/Radio',
  component: Radio,
} as Meta

export const Default: Story<RadioProps> = (args) => {
  return (
    <Form>
        <Radio name="radio1" />
        <Radio name="radio2" defaultChecked />
    </Form>
  )
}

Default.args = {}
