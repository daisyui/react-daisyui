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
    color?: ComponentColor
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
        [`step-${color}`]: color,
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
