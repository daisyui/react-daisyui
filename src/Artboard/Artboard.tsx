import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type ArtboardProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    size?: 1 | 2 | 3 | 4 | 5 | 6
    horizontal?: boolean
  }

const Artboard = forwardRef<HTMLDivElement, ArtboardProps>(
  (
    { children, size, horizontal, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'artboard',
      'artboard-demo',
      className,
      clsx({
        [`phone-${size}`]: size,
        horizontal: horizontal,
      })
    )

    return (
      <div
        aria-label="Artboard"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        {children}
      </div>
    )
  }
)

Artboard.displayName = 'Artboard'

export default Artboard
