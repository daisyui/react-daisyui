import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export type ArtboardProps =
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps
  & {
    children?: ReactNode | ReactNode[]
    size?: 1 | 2 | 3 | 4 | 5 | 6
    horizontal?: boolean
}

const Artboard = forwardRef<HTMLDivElement, ArtboardProps>(({
  children,
  size,
  horizontal,
  dataTheme,
  className,
  ...props
}, ref): JSX.Element => {
  const classes = clsx(
    'artboard',
    'artboard-demo',
    className,
    {
      [`phone-${size}`]: size,
      'horizontal': horizontal,
    }
  )

  return (
    <div
      {...props}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
    >
      {children}
    </div>
  )
})

Artboard.displayName = "Artboard"

export default Artboard
