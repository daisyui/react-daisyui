import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type DockLabelProps = React.HTMLAttributes<HTMLSpanElement>

const DockLabel = forwardRef<
  HTMLSpanElement,
  DockLabelProps
>(({ children, className, ...props }, ref): JSX.Element => {
  const classes = twMerge('dock-label', className)
  return (
    <span {...props} className={classes} ref={ref}>
      {children}
    </span>
  )
})

export default DockLabel
