import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> &
  IComponentBaseProps & {
    disabled?: boolean
  }

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ className, disabled, ...props }, ref) => {
    const classes = twMerge(
      className,
      clsx({
        disabled: disabled,
      })
    )

    return <li role="menuitem" className={classes} {...props} ref={ref} />
  }
)

export default MenuItem
