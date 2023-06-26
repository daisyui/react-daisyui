import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type ArtboardProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    demo?: boolean
    size?: 1 | 2 | 3 | 4 | 5 | 6
    horizontal?: boolean
  }

const Artboard = forwardRef<HTMLDivElement, ArtboardProps>(
  (
    { children, demo = true, size, horizontal, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'artboard',
      className,
      clsx({
        'artboard-demo': demo,
        'phone-1': size === 1,
        'phone-2': size === 2,
        'phone-3': size === 3,
        'phone-4': size === 4,
        'phone-5': size === 5,
        'phone-6': size === 6,
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
