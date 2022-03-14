import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> &
  IComponentBaseProps & {
    disabled?: boolean
  }

const MenuItem = ({ className, disabled, ...props }: MenuItemProps) => {
  const classes = twMerge(
    className,
    clsx({
      disabled: disabled,
    })
  )

  return <li className={classes} {...props} />
}

export default MenuItem
