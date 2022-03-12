import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

export type KbdProps = React.HTMLAttributes<HTMLElement> &
  IComponentBaseProps & {
    size?: ComponentSize
  }

const Kbd = ({
  children,
  size,
  dataTheme,
  className,
  ...props
}: KbdProps): JSX.Element => {
  const classes = twMerge(
    'kbd',
    className,
    clsx({
      [`kbd-${size}`]: size,
    })
  )

  return (
    <kbd {...props} data-theme={dataTheme} className={classes}>
      {children}
    </kbd>
  )
}

export default Kbd
