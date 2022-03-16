import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentColor, IComponentBaseProps } from '../types'

export type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'color'
> &
  IComponentBaseProps & {
    color?: ComponentColor
    bordered?: boolean
    borderOffset?: boolean
  }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { bordered = true, borderOffset, color, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'textarea',
      className,
      clsx({
        [`textarea-${color}`]: color,
        [`focus:outline-offset-0`]: !borderOffset,
        'textarea-bordered': bordered,
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
