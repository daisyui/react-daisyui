import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize, ComponentPosition } from '../types'

import Tab from './Tab'
import RadioTab from './RadioTab'

export type TabsProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    variant?: 'bordered' | 'lift' | 'boxed'
    size?: ComponentSize
    position?: Extract<ComponentPosition, 'top' | 'bottom'>
  }

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, className, variant, size, position }, ref): JSX.Element => {
    const classes = twMerge(
      'tabs',
      className,
      clsx({
        'tabs-boxed': variant === 'boxed',
        'tabs-bordered': variant === 'bordered',
        'tabs-lift': variant === 'lift',
        'tabs-xl': size === 'xl',
        'tabs-lg': size === 'lg',
        'tabs-md': size === 'md',
        'tabs-sm': size === 'sm',
        'tabs-xs': size === 'xs',
        'tabs-top': position === 'top',
        'tabs-bottom': position === 'bottom',
      })
    )

    return (
      <div role="tablist" className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

export default Object.assign(Tabs, { Tab, RadioTab })
