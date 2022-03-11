import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> &
  IComponentBaseProps & {
    color?: 'primary' | 'secondary' | 'accent'
    size?: ComponentSize
  }

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked = false,
      color,
      size,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'checkbox',
      className,
      clsx({
        [`checkbox-${size}`]: size,
        [`checkbox-${color}`]: color,
      })
    )

    return (
      <input
        {...props}
        ref={ref}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        data-theme={dataTheme}
        className={classes}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
