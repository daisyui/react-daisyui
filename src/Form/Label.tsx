import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  IComponentBaseProps & {
    title?: string
  }

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, title, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('label', className)

    return (
      <label {...props} className={classes}>
        <span className="label-text cursor-pointer" ref={ref}>
          {title}
        </span>
        {children}
      </label>
    )
  }
)

export default Label
