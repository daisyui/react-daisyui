import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentSize,
} from '../types'

export type LoadingProps = 
  React.HTMLAttributes<HTMLSpanElement>
  & IComponentBaseProps
  & {
    size?: ComponentSize
    color?: ComponentColor
    variant?: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'
  }

const Loading = forwardRef<HTMLSpanElement, LoadingProps>(
  (
    {
      size,
      variant = 'spinner',
      color,
      dataTheme,
      className,
      style,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'loading',
      className,
      clsx({
        'loading-lg': size === 'lg',
        'loading-md': size === 'md',
        'loading-sm': size === 'sm',
        'loading-xs': size === 'xs',
        'loading-spinner': variant === 'spinner',
        'loading-dots': variant === 'dots',
        'loading-ring': variant === 'ring',
        'loading-ball': variant === 'ball',
        'loading-bars': variant === 'bars',
        'loading-infinity': variant === 'infinity',
        'text-primary': color === 'primary',
        'text-secondary': color === 'secondary',
        'text-accent': color === 'accent',
        'text-info': color === 'info',
        'text-success': color === 'success',
        'text-warning': color === 'warning',
        'text-error': color === 'error',
        'text-ghost': color === 'ghost',
      })
    )

    return (
      <span
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
        style={style}
      />
    )
  }
)

Loading.displayName = 'Loading'

export default Loading
