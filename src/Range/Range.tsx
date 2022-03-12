import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

export type RangeProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  IComponentBaseProps & {
    value: number
    min?: number
    max?: number
    color?: 'primary' | 'secondary' | 'accent'
    size?: ComponentSize
    disabled?: boolean
  }

const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ color, size, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'range',
      className,
      clsx({
        [`range-${size}`]: size,
        [`range-${color}`]: color,
      })
    )

    return (
      <input
        {...props}
        ref={ref}
        type="range"
        data-theme={dataTheme}
        className={classes}
      />
    )
  }
)

Range.displayName = 'Range'

export default Range
