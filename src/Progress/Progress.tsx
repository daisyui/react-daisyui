import React, { forwardRef } from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentColor,
} from '../types'

export type ProgressProps =
  & React.ProgressHTMLAttributes<HTMLProgressElement>
  & IComponentBaseProps
  & {
    color?: ComponentColor
}

const Progress = forwardRef<HTMLProgressElement, ProgressProps>(({
  color,
  dataTheme,
  className,
  ...props
}, ref): JSX.Element => {
  const classes = clsx(
    'progress',
    className,
    {
      [`progress-${color}`]: color,
    }
  )

  return (
    <progress
      {...props}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
    />
  )
})

Progress.displayName = "Progress"

export default Progress