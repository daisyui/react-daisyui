import React, { useState, useEffect } from 'react'
import { Story, Meta } from '@storybook/react'

import Countdown, { CountdownProps } from '.'

export default {
  title: 'Shared Components/Countdown',
  component: Countdown,
} as Meta

export const Default: Story<CountdownProps> = (args) => {
  const [value, setValue] = useState<number>(args.value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value - 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return (
    <Countdown value={value}/>
  )
}
Default.args = {
  value: 50,
}
