import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

import BottomNavigationLabel, {
  BottomNavigationLabelProps,
} from './BottomNavigationLabel'

export type BottomNavigationProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    size?: ComponentSize
  }

const BottomNavigation = forwardRef<HTMLDivElement, BottomNavigationProps>(
  ({ size, dataTheme, className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'btm-nav',
      clsx({
        [`btm-nav-${size}`]: size,
      }),
      className
    )

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

BottomNavigation.displayName = 'BottomNavigation'

export default Object.assign(BottomNavigation, { Label: BottomNavigationLabel })
