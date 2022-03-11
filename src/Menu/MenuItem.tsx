import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> &
  IComponentBaseProps & {
    title?: boolean
    disabled?: boolean
  }

const MenuItem = ({ className, title, disabled, ...props }: MenuItemProps) => {
  const classes = twMerge(
    className,
    clsx({
      'menu-title': title,
      disabled: disabled,
    })
  )

  return <li className={classes} {...props} />
}

export default MenuItem
