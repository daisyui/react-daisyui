import React, { ReactElement } from 'react'
import clsx from 'clsx'

import { AvatarProps } from '../Avatar'

export type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactElement<AvatarProps>[]
  space?: number
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, space = -6, className, ...props }, ref): JSX.Element => {
    const spacingClassName = `${space < 0 ? '-':''}space-x-${Math.abs(space)}`
    const classes = clsx('avatar-group', spacingClassName, className)

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
