import React, { cloneElement, ReactElement } from 'react'
import clsx from 'clsx'

import Avatar, { AvatarProps } from '../Avatar'

type AvatarGroupProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> &
  Omit<AvatarProps, 'children'> & {
  children: ReactElement<AvatarProps>[]
  max?: number
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max = Infinity, children, className, ...props }, ref): JSX.Element => {
    const classes = clsx('avatar-group', '-space-x-6', className)

    return (
      <div
        aria-label={`Group of ${children.length} avatar photos`}
        {...props}
        className={classes}
        ref={ref}
      >
        {children.slice(0, Math.min(children.length, max)).map((child) => (
          cloneElement(child, {...props})
        ))}
        {children.length > max && (
          <Avatar
            className='bg-neutral-focus text-neutral-content'
            letters={'+' + (children.length - max).toString()}
            {...props}
          />
        )}
      </div>
    )
  }
)

export default AvatarGroup
