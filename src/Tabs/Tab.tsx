import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type TabProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean
  disabled?: boolean
}

const Tab = forwardRef<HTMLAnchorElement, TabProps>(
  ({ children, className, active, disabled, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'tab',
      className,
      clsx({
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
