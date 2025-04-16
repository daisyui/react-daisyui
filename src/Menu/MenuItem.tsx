import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> &
  IComponentBaseProps & {
    focus?: boolean
    active?: boolean
    disabled?: boolean
  }

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ className, focus, active, disabled, ...props }, ref) => {
    const classes = twMerge(
      className,
      clsx({
        'menu-focus': focus,
        'menu-active': active,
        'menu-disabled': disabled,
      })
    )

    return <li role="menuitem" className={classes} {...props} ref={ref} />
  }
)

export default MenuItem
