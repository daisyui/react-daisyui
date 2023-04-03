import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

export type KbdProps = React.HTMLAttributes<HTMLElement> &
  IComponentBaseProps & {
    size?: ComponentSize
  }

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ children, size, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'kbd',
      className,
      clsx({
        'bd-lg': size === 'lg',
        'bd-md': size === 'md',
        'bd-sm': size === 'sm',
        'bd-xs': size === 'xs',
      })
    )

    return (
      <kbd {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </kbd>
    )
  }
)

export default Kbd
