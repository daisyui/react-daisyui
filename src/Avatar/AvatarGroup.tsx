import React, { ReactElement } from 'react'
import clsx from 'clsx'

import { AvatarProps } from './Avatar'

type AvatarGroupProps = {
    children: ReactElement<AvatarProps> | ReactElement<AvatarProps>[]
    className?: string
    style?: Record<string, string | number>
}

const AvatarGroup = ({
    children,
    className,
    style
}: AvatarGroupProps): JSX.Element => {
    const classes = clsx(
        'avatar-group',
        '-space-x-6',
        className,
    )
  
    return (
      <div
        className={classes}
        style={style}
      >
        {children}
      </div>
    )
}

export default AvatarGroup
