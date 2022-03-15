import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentBrandColors,
  ComponentSize,
} from '../types'

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: ComponentBrandColors
    size?: ComponentSize
  }

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ color, size, name, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'radio',
      className,
      clsx({
        [`radio-${size}`]: size,
        [`radio-${color}`]: color,
      })
    )

    return (
      <input
        {...props}
        ref={ref}
        type="radio"
        name={name}
        data-theme={dataTheme}
        className={classes}
      />
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
