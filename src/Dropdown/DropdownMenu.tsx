import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type DropdownMenuProps = React.HTMLAttributes<HTMLUListElement> &
  IComponentBaseProps

const DropdownMenu = ({
  dataTheme,
  className,
  ...props
}: DropdownMenuProps) => {
  const classes = twMerge(
    'dropdown-content menu p-2 shadow bg-base-100 rounded-box',
    className
  )

  return (
    <ul {...props} tabIndex={0} data-theme={dataTheme} className={classes} />
  )
}

export default DropdownMenu
