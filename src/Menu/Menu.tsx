import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps, ComponentSize } from '../types'

import MenuItem, { MenuItemProps as ItemProps } from './MenuItem'

export type MenuItemProps = ItemProps

export interface MenuProps extends IComponentBaseProps {
  children?: ReactNode

  // responsive props
  normal?: ComponentSize | boolean // Applies default paddings
  compact?: ComponentSize | boolean // Applies smaller padding
  vertical?: ComponentSize | boolean // Vertical menu (default)
  horizontal?: ComponentSize | boolean // Horizontal menu
}

interface ModifierMap {
  [key: string]: {
    [key: string]: string | undefined
  }
}

const DYNAMIC_MODIFIERS: ModifierMap = {
  compact: {
    true: 'menu-compact',
    xs: 'xs:menu-compact',
    sm: 'sm:menu-compact',
    md: 'md:menu-compact',
    lg: 'lg:menu-compact',
  },
  normal: {
    true: 'menu-normal',
    xs: 'xs:menu-normal',
    sm: 'sm:menu-normal',
    md: 'md:menu-normal',
    lg: 'lg:menu-normal',
  },
  horizontal: {
    true: 'menu-horizontal',
    xs: 'xs:menu-horizontal',
    sm: 'sm:menu-horizontal',
    md: 'md:menu-horizontal',
    lg: 'lg:menu-horizontal',
  },
  vertical: {
    true: 'menu-vertical',
    xs: 'xs:menu-vertical',
    sm: 'sm:menu-vertical',
    md: 'md:menu-vertical',
    lg: 'lg:menu-vertical',
  },
}

const Menu = ({
  className,
  normal,
  compact,
  horizontal,
  vertical,
  ...props
}: MenuProps) => (
  <ul
    className={clsx('menu', className, {
      [(compact && DYNAMIC_MODIFIERS.compact[compact.toString()]) || '']:
        compact,
      [(normal && DYNAMIC_MODIFIERS.normal[normal.toString()]) || '']: normal,
      [(horizontal && DYNAMIC_MODIFIERS.horizontal[horizontal.toString()]) ||
      '']: horizontal,
      [(vertical && DYNAMIC_MODIFIERS.vertical[vertical.toString()]) || '']:
        vertical,
    })}
    {...props}
  />
)

Menu.Item = MenuItem

export default Menu
