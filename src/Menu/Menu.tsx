import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

import MenuTitle, { MenuTitleProps as TitleProps } from './MenuTitle'
import MenuItem, { MenuItemProps as ItemProps } from './MenuItem'
import MenuDropdown, {
  MenuDropdownProps as DropdownProps,
} from './MenuDropdown'
import MenuDetails, { MenuDetailsProps as DetailsProps } from './MenuDetails'

export type MenuTitleProps = TitleProps
export type MenuItemProps = ItemProps
export type MenuDropdownProps = DropdownProps
export type MenuDetailsProps = DetailsProps

export type MenuProps = React.HTMLAttributes<HTMLUListElement> &
  IComponentBaseProps & {
    vertical?: boolean // Vertical menu (default)
    horizontal?: boolean // Horizontal menu
    responsive?: boolean
    size?: ComponentSize
  }

const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  (
    { responsive, horizontal, vertical, dataTheme, className, size, ...props },
    ref
  ) => {
    const classes = twMerge(
      'menu',
      className,
      clsx({
        'menu-vertical lg:menu-horizontal': responsive,
        'menu-lg': size === 'lg',
        'menu-md': size === 'md',
        'menu-sm': size === 'sm',
        'menu-xs': size === 'xs',
        'menu-vertical': vertical,
        'menu-horizontal': horizontal,
      })
    )

    return (
      <ul
        role="menu"
        data-theme={dataTheme}
        className={classes}
        {...props}
        ref={ref}
      />
    )
  }
)

export default Object.assign(Menu, {
  Title: MenuTitle,
  Item: MenuItem,
  Dropdown: MenuDropdown,
  Details: MenuDetails,
})
