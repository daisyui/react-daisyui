import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentSize,
} from '../types'

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: ComponentColor
    size?: ComponentSize
    indeterminate?: boolean
  }

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      color,
      size,
      indeterminate,
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
        'checkbox-lg': size === 'lg',
        'checkbox-md': size === 'md',
        'checkbox-sm': size === 'sm',
        'checkbox-xs': size === 'xs',
        'checkbox-primary': color === 'primary',
        'checkbox-secondary': color === 'secondary',
        'checkbox-accent': color === 'accent',
        'checkbox-info': color === 'info',
        'checkbox-success': color === 'success',
        'checkbox-warning': color === 'warning',
        'checkbox-error': color === 'error',
      })
    )

    const setRef = (input: HTMLInputElement | null) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(input)
        } else {
          ref.current = input
        }
      }

      if (input && indeterminate !== undefined) {
        input.indeterminate = indeterminate
      }
    }

    return (
      <input
        {...props}
        ref={setRef}
        type="checkbox"
        data-theme={dataTheme}
        className={classes}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
