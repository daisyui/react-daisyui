import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor } from '../types'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  IComponentBaseProps & {
    color?: 'neutral' | ComponentColor
    hover?: boolean
  }

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { children, href, color, hover = true, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'link',
      className,
      clsx({
        [`link-${color}`]: color,
        'link-hover': hover,
      })
    )

    return (
      <a
        {...props}
        href={href}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'

export default Link
