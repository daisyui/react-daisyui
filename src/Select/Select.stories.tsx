import React from 'react'
import { Story, Meta } from '@storybook/react'

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

export const Default: Story<SelectProps<string>> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Select {...args}>
        <Option value={undefined} disabled selected>
          Pick your favorite Simpson
        </Option>
        <Option value={'Horner'}>Horner</Option>
        <Option value={'Marge'}>Marge</Option>
        <Option value={'Bart'}>Bart</Option>
        <Option value={'Lisa'}>Lisa</Option>
        <Option value={'Maggie'}>Maggie</Option>
      </Select>
    </div>
  )
}

export const FormControlAndLabels: Story<SelectProps<string>> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <Select {...args}>
          <Option value={undefined} disabled selected>
            Pick one
          </Option>
          <Option value="Start Wars">Star Wars</Option>
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
