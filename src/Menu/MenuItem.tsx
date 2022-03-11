import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export interface MenuItemProps extends IComponentBaseProps {
  children?: ReactNode
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
