import React from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface DividerProps extends IComponentBaseProps {
  children?: string
  vertical?: Boolean
}

const Divider = ({
  children,
  vertical,
  dataTheme,
  className,
  style,
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
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

export default Divider