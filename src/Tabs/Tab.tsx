import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentColor } from '../types'

export type TabProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> & {
  color?: ComponentColor
  bgColor?: string
  borderColor?: string
  active?: boolean
  disabled?: boolean
}

const Tab = forwardRef<HTMLAnchorElement, TabProps>(
  ({
    children,
    className,
    color,
    bgColor,
    borderColor,
    active,
    disabled,
    ...props
  }, ref): JSX.Element => {
    const classes = twMerge(
      'tab',
      className,
      clsx({
        [`[--tab-bg:${bgColor}]`]: bgColor,
        [`[--tab-border-color:${borderColor}]`]: borderColor,
        'text-neutral': color === 'neutral',
        'text-primary': color === 'primary',
        'text-secondary': color === 'secondary',
        'text-accent': color === 'accent',
        'text-info': color === 'info',
        'text-success': color === 'success',
        'text-warning': color === 'warning',
        'text-error': color === 'error',
        'tab-active': active,
        'tab-disabled': disabled,
      })
    )
    return (
      <a role="tab" {...props} ref={ref} className={classes}>
        {children}
      </a>
    )
  }
)

export default Tab
