import React, { forwardRef } from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentColor
} from '../types'

export type LinkProps =
  & React.AnchorHTMLAttributes<HTMLAnchorElement>
  & IComponentBaseProps
  & {
    children: string
    href?: string
    color?: 'neutral' | ComponentColor
    hover?: boolean
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
  children,
  href,
  color,
  hover = true,
  dataTheme,
  className,
  ...props
}, ref): JSX.Element => {
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
      {...props}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
    >
      {children}
    </a>
  )
})

Link.displayName = "Link"

export default Link
