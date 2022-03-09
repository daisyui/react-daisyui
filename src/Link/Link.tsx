import React from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentColor
} from '../types'

export interface LinkProps extends IComponentBaseProps {
  children: string
  href?: string
  color?: 'neutral' | ComponentColor
  hover?: boolean
}

const Link = ({
  children,
  href,
  color,
  hover = true,
  dataTheme,
  className,
  style,
}: LinkProps): JSX.Element => {
  const classes = clsx(
    'link',
    className,
    {
      [`link-${color}`]: color,
      'link-hover': hover,
    }
  )

  return (
    <a
      data-theme={dataTheme}
      className={classes}
      style={style}
      href={href}
    >
      {children}
    </a>
  )
}

export default Link
