import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type MenuTitleProps = React.LiHTMLAttributes<HTMLLIElement> &
  IComponentBaseProps

const MenuTitle = ({ className, ...props }: MenuTitleProps) => {
  const classes = twMerge(
    'menu-title',
    className,
  )

  return <li className={classes} {...props} />
}

export default MenuTitle
