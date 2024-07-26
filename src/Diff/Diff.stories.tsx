import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Diff, { DiffProps } from '.'

const meta: Meta<DiffProps> = {
  title: 'Data Display/Diff',
  component: Diff,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<DiffProps> = ({ secondItem, ...args }) => (
  <Diff
    {...args}
    secondItem={
      <img
        alt="daisy"
        src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
      />
    }
  >
    <img
      alt="daisy"
      src=" https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
    />
  </Diff>
)
Default.argTypes = {
  secondItem: {
    control: false,
  },
}
export const Text: Story<DiffProps> = ({ secondItem, ...args }) => (
  <Diff
    {...args}
    secondItem={
      <div className="bg-base-200 text-9xl font-black grid place-content-center">
        DAISY
      </div>
    }
  >
    <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
      DAISY
    </div>
  </Diff>
)
Text.argTypes = {
  secondItem: {
    control: false,
  },
}
