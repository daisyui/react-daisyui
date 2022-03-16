import React, { useContext } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'
import { CollapseContext } from './CollapseContext'

export type CollapseTitleProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const CollapseTitle = React.forwardRef<HTMLDivElement, CollapseTitleProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('collapse-title', 'text-xl font-medium', className)
    const { onClick, customIcon } = useContext(CollapseContext)!

    const handleClick: React.MouseEventHandler = (e) => {
      if (e.target === e.currentTarget) {
        e.stopPropagation()
        e.preventDefault()
        onClick(e)
      }
    }

    return (
      <div {...props} className={classes} onClick={handleClick} ref={ref}>
        {customIcon ? (
          <div className="flex flex-row gap-2">
            <div className="flex-1">{children}</div>
            {customIcon}
          </div>
        ) : (
          children
        )}
      </div>
    )
  }
)

export default CollapseTitle
