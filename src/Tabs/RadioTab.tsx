import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentColor } from '../types'

export type RadioTabProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'color'
> & {
  color?: ComponentColor
  bgColor?: string
  borderColor?: string
  active?: boolean
  disabled?: boolean
  label: string
  name: string
  contentClassName?: string
}

const RadioTab = forwardRef<HTMLInputElement, RadioTabProps>(
  (
    {
      children,
      className,
      color,
      bgColor,
      borderColor,
      active,
      label,
      disabled,
      name,
      contentClassName,
      ...props
    },
    ref
  ): JSX.Element => {
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
    const contentClasses = twMerge('tab-content', contentClassName)

    return (
      <>
        <input
          className={classes}
          role="tab"
          type="radio"
          name={name}
          disabled={disabled}
          aria-label={label}
          {...props}
          ref={ref}
        />
        <div className={contentClasses}>{children}</div>
      </>
    )
  }
)

export default RadioTab
