import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor, ComponentSize } from '../types'

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'color'
> &
  IComponentBaseProps & {
    size?: ComponentSize
    color?: ComponentColor
  }

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      placeholder,
      size,
      color,
      dataTheme,
      className,
      type,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'input',
      className,
      clsx({
        'input-xl': size === 'xl',
        'input-lg': size === 'lg',
        'input-md': size === 'md',
        'input-sm': size === 'sm',
        'input-xs': size === 'xs',
        'input-primary': color === 'primary',
        'input-secondary': color === 'secondary',
        'input-accent': color === 'accent',
        'input-ghost': color === 'ghost',
        'input-info': color === 'info',
        'input-success': color === 'success',
        'input-warning': color === 'warning',
        'input-error': color === 'error',
      })
    )

    return (
      <input
        {...props}
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        data-theme={dataTheme}
        className={classes}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
