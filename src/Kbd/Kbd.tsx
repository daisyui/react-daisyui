import React, { ReactNode } from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentSize,
} from '../types'

export interface KbdProps extends IComponentBaseProps {
  children?: ReactNode | ReactNode[]
  size?: ComponentSize
}

const Kbd = ({
  children,
  size,
  dataTheme,
  className,
  style,
}: KbdProps): JSX.Element => {
  const classes = clsx(
    'kbd',
    className,
    {
      [`kbd-${size}`]: size,
    }
  )

  return (
    <kbd
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
      {children}
    </kbd>
  )
}

export default Kbd
