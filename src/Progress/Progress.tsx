import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor } from '../types'

export type ProgressProps = Omit<
  React.ProgressHTMLAttributes<HTMLProgressElement>,
  'color'
> &
  IComponentBaseProps & {
    color?: ComponentColor
  }

const Progress = forwardRef<HTMLProgressElement, ProgressProps>(
  ({ color, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'progress',
      className,
      clsx({
        [`progress-${color}`]: color,
      })
    )

    return (
      <progress
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      />
    )
  }
)

Progress.displayName = 'Progress'

export default Progress
