import React from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export type DividerProps =
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps
  & {
    children?: string
    vertical?: Boolean
}

const Divider = ({
  children,
  vertical,
  dataTheme,
  className,
  ...props
}: DividerProps): JSX.Element => {
  const classes = clsx(
    'divider',
    className,
    {
      'divider-vertical': vertical,
    }
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

export default Divider