import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

import Tab from './Tab'
import RadioTab from './RadioTab'

export type TabsProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    variant?: 'bordered' | 'lifted' | 'boxed'
    size?: ComponentSize
  }

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, className, variant, size }, ref): JSX.Element => {
    const classes = twMerge(
      'tabs',
      className,
      clsx({
        'tabs-boxed': variant === 'boxed',
        'tabs-bordered': variant === 'bordered',
        'tabs-lifted': variant === 'lifted',
        'tabs-lg': size === 'lg',
        'tabs-md': size === 'md',
        'tabs-sm': size === 'sm',
        'tabs-xs': size === 'xs',
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
