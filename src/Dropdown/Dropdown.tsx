import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import DropdownMenu from './DropdownMenu'
import DropdownItem from './DropdownItem'
import DropdownToggle from './DropdownToggle'

export type DropdownProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    item?: ReactNode
    horizontal?: 'left' | 'center' | 'right'
    vertical?: 'top' | 'middle' | 'end'
    hover?: boolean
    open?: boolean
  }

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    { children, item, horizontal, vertical, hover, open, dataTheme, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'dropdown',
      clsx({
        [`dropdown-${horizontal}`]: horizontal,
        [`dropdown-${vertical}`]: vertical,
        'dropdown-hover': hover,
        'dropdown-open': open,
      })
    )

    return (
      <div
        role="listbox"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        <label tabIndex={0}>{children}</label>
        <ul className="dropdown-content">{item}</ul>
      </div>
    )
  }
)

export default Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
})
