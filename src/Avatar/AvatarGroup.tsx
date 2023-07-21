import React, { ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

import { AvatarProps } from '../Avatar'

export type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactElement<AvatarProps>[]
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('avatar-group -space-x-6', className)

    return (
      <div
        aria-label={`Group of ${children.length} avatar photos`}
        {...props}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default AvatarGroup
