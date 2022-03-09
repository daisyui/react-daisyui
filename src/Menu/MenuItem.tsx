import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { IComponentBaseProps } from '../types'

export interface MenuItemProps extends IComponentBaseProps {
  children?: ReactNode
  title?: boolean
  disabled?: boolean
}

const MenuItem = ({ className, title, disabled, ...props }: MenuItemProps) => {
  return (
    <li
      className={clsx(className, {
        'menu-title': title,
        disabled: disabled,
      })}
      {...props}
    />
  )
}

export default MenuItem
