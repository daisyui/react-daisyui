import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import Label from './Label'

export type FormProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Form = React.forwardRef<HTMLDivElement, FormProps>(
  ({ children, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('form-control', className)

    return (
      <div
        role="form"
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Object.assign(Form, { Label })
