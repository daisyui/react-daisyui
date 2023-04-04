import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor } from '../types'

export type StepProps = Omit<
  React.LiHTMLAttributes<HTMLLIElement>,
  'value' | 'color'
> &
  IComponentBaseProps & {
    value?: string
    color?: 'neutral' | ComponentColor
  }

const Step = React.forwardRef<HTMLLIElement, StepProps>(
  (
    { children, value, color, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'step',
      className,
      clsx({
        'step-primary': color === 'primary',
        'step-secondary': color === 'secondary',
        'step-accent': color === 'accent',
        'step-info': color === 'info',
        'step-success': color === 'success',
        'step-warning': color === 'warning',
        'step-error': color === 'error',
      })
    )

    return (
      <li
        aria-label="Step"
        {...props}
        data-theme={dataTheme}
        data-content={value}
        className={classes}
        ref={ref}
      >
        {children}
      </li>
    )
  }
)
export default Step
