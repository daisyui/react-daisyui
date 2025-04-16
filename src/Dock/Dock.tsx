import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

import DockItem, { DockItemProps as ItemProps } from './DockItem'
import DockLabel, { DockLabelProps as LabelProps } from './DockLabel'

export type DockItemProps = ItemProps
export type DockLabelProps = LabelProps

export type DockProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    size?: ComponentSize
  }

const Dock = forwardRef<HTMLDivElement, DockProps>(
  ({ size, dataTheme, className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'dock',
      clsx({
        'dock-lg': size === 'lg',
        'dock-md': size === 'md',
        'dock-sm': size === 'sm',
        'dock-xs': size === 'xs',
      }),
      className
    )

    return (
      <div
        {...props}
        role="navigation"
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

Dock.displayName = 'Dock'

export default Object.assign(Dock, {
  Item: DockItem,
  Label: DockLabel,
})
