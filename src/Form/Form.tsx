import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types';

export interface FormProps extends IComponentBaseProps {
  children: ReactNode | ReactNode[]
}

const Form = ({
  children,
  dataTheme,
  className,
}: FormProps): JSX.Element => {
  const classes = twMerge(
    'form-control',
    className,
  )

  return (
    <div
      data-theme={dataTheme}
      className={classes}
    >
      {children}
    </div>
  )
}

export default Form