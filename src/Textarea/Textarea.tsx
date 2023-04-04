import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentColor, ComponentSize, IComponentBaseProps } from '../types'

export type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'color'
> &
  IComponentBaseProps & {
    color?: ComponentColor
    size?: ComponentSize
    bordered?: boolean
    borderOffset?: boolean
  }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { bordered = true, borderOffset, color, size, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'textarea',
      className,
      clsx({
        'textarea-lg': size === 'lg',
        'textarea-md': size === 'md',
        'textarea-sm': size === 'sm',
        'textarea-xs': size === 'xs',
        'textarea-primary': color === 'primary',
        'textarea-secondary': color === 'secondary',
        'textarea-accent': color === 'accent',
        'textarea-ghost': color === 'ghost',
        'textarea-info': color === 'info',
        'textarea-success': color === 'success',
        'textarea-warning': color === 'warning',
        'textarea-error': color === 'error',
        'textarea-bordered': bordered,
        'focus:outline-offset-0': !borderOffset,
      })
    )

    return (
      <textarea
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      />
    )
  }
)

export default Textarea
