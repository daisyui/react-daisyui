import React, { FormHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import Label from './Label'

export type FormProps = FormHTMLAttributes<HTMLFormElement> &
  IComponentBaseProps

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ children, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('form-control', className)

    return (
      <form
        role="form"
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </form>
    )
  }
)

export default Object.assign(Form, { Label })
