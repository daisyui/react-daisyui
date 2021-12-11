import React from 'react'
import clsx from 'clsx'

import { ComponentColor, ComponentStatus } from '../types'

export type ProgressProps = {
  value: number
  max: number
  color?: ComponentColor
  status?: ComponentStatus
  className?: string
  style?: Record<string, string | number>
}

const Progress = ({
  value,
  max,
  color,
  status,
  className,
  style,
}: ProgressProps): JSX.Element => {
  const classes = clsx(
    'progress',
    className,
    {
      [`progress-${color}`]: color,
      [`progress-${status}`]: status,
    }
  )

  return (
    <progress
      className={classes}
      style={style}
      value={value}
      max={max}
    />
  )
}

export default Progress