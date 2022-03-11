import React, { ReactElement } from 'react'
import clsx from 'clsx'

import { AvatarProps } from './Avatar'

type AvatarGroupProps =
  & React.HTMLAttributes<HTMLDivElement>
  & {
    children: ReactElement<AvatarProps> | ReactElement<AvatarProps>[]
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
