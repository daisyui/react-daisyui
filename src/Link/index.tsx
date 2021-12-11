import React from 'react'
import clsx from 'clsx'

import { ComponentColor } from '../types'

export type LinkProps = {
  children: string
  href?: string
  color?: 'neutral' | ComponentColor
  hover?: boolean
  className?: string
  style?: Record<string, string | number>
}

const Link = ({
  children,
  href,
  color,
  hover = true,
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
      className={classes}
      style={style}
      href={href}
    >
      {children}
    </a>
  )
}

export default Link
