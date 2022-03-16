import React, { useContext } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'
import { CollapseContext } from './CollapseContext'

export type CollapseContentProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const CollapseContent = React.forwardRef<HTMLDivElement, CollapseContentProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('collapse-content', className)

    const handleClick: React.MouseEventHandler = (e) => {
      if (e.target === e.currentTarget) {
        e.stopPropagation()
        e.preventDefault()
      }
    }

    return (
      <div {...props} onClick={handleClick} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

export default CollapseContent
