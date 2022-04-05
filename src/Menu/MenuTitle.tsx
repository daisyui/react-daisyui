import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type MenuTitleProps = React.LiHTMLAttributes<HTMLLIElement> &
  IComponentBaseProps

const MenuTitle = React.forwardRef<HTMLLIElement, MenuTitleProps>(
  ({ className, ...props }, ref) => {
    const classes = twMerge('menu-title', className)

    return <li {...props} className={classes} ref={ref} />
  }
)

export default MenuTitle
