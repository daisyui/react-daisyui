import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types';

export interface FormProps extends IComponentBaseProps {
  children: ReactNode | ReactNode[]
}

const Form = ({
  children,
  dataTheme,
  className,
}: FormProps): JSX.Element => {
  const classes = clsx(
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