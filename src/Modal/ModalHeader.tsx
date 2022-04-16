import React from 'react'
import { twMerge } from 'tailwind-merge'

type ModalHeaderProps = React.HTMLAttributes<HTMLDivElement>

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const classes = twMerge('w-full mb-8 text-xl', className)
    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

ModalHeader.displayName = 'ModalHeader'

export default ModalHeader
