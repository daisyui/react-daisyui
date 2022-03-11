import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types';

export type FormProps =
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps

const Form = ({
  children,
  dataTheme,
  className,
  ...props
}: FormProps): JSX.Element => {
  const classes = twMerge(
    'form-control',
    className,
  )

  return (
    <div
      {...props}
      data-theme={dataTheme}
      className={classes}
    >
      {children}
    </div>
  )
}

export default Form