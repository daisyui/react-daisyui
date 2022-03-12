import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  IComponentBaseProps & {
    color?: 'primary' | 'secondary' | 'accent'
    size?: ComponentSize
  }

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ color, size, dataTheme, className, ...props }, ref): JSX.Element => {
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
        data-theme={dataTheme}
        className={classes}
      />
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
