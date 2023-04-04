import React, { useState } from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Select, { SelectProps } from '.'

const { Option } = Select

export default {
  title: 'Data Input/Select',
  component: Select,
  parameters: {
    controls: { exclude: ['ref'] },
  },
  args: {
    className: 'w-full max-w-xs',
    disabled: false,
  },
} as Meta

export const Default: Story<SelectProps> = (args) => {
  const [value, setValue] = useState('default')

  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Select
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <Option value={'default'} disabled>
          Pick your favorite Simpson
        </Option>
        <Option value={'Homer'}>Homer</Option>
        <Option value={'Marge'}>Marge</Option>
        <Option value={'Bart'}>Bart</Option>
        <Option value={'Lisa'}>Lisa</Option>
        <Option value={'Maggie'}>Maggie</Option>
      </Select>
    </div>
  )
}

export const FormControlAndLabels: Story<SelectProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <Select defaultValue={'default'} onChange={console.log} {...args}>
          <Option value={'default'} disabled>
            Pick one
          </Option>
          <Option value="Star Wars">Star Wars</Option>
          <Option value="Harry Potter">Harry Potter</Option>
          <Option value="Lord of the Rings">Lord of the Rings</Option>
          <Option value="Planet of the Apes">Planet of the Apes</Option>
          <Option value="Star Trek">Star Trek</Option>
        </Select>
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
    </div>
  )
}
