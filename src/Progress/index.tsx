import React from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentStatus
} from '../types'

export interface ProgressProps extends IComponentBaseProps {
  value: number
  max: number
  color?: ComponentColor
  status?: ComponentStatus
}

const Progress = ({
  value,
  max,
  color,
  status,
  dataTheme,
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
      data-theme={dataTheme}
      className={classes}
      style={style}
      value={value}
      max={max}
    />
  )
}

export default Progress