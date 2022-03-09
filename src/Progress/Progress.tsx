import React from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentColor,
} from '../types'

export interface ProgressProps extends IComponentBaseProps {
  value: number
  max: number
  color?: ComponentColor
}

const Progress = ({
  value,
  max,
  color,
  dataTheme,
  className,
  style,
}: ProgressProps): JSX.Element => {
  const classes = clsx(
    'progress',
    className,
    {
      [`progress-${color}`]: color,
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