import React, { ReactElement } from 'react'
import clsx from 'clsx'

import {
  ComponentColor,
  ComponentShape,
  ComponentSize
} from '../types'

export type AvatarProps = {
  src?: string
  letters?: string
  size?: ComponentSize
  shape?: ComponentShape
  border?: boolean
  borderColor?: ComponentColor
  online?: boolean
  offline?: boolean
  className?: string
  style?: Record<string, string | number>
}

const Avatar = ({
  src,
  letters,
  size, 
  shape,
  border,
  borderColor,
  online,
  offline,
  className,
  style,
}: AvatarProps): JSX.Element => {
  const containerClasses = clsx(
    'avatar',
    className,
    {
      'online': online,
      'offline': offline,
      'placeholder': !src,
    }
  )

  const imgClasses = clsx(
    {
      'ring ring-offset-base-100 ring-offset-2': border,
      [`ring-${borderColor}`]: borderColor,
      'rounded-btn': shape === 'square',
      'rounded-full': shape === 'circle',
      'w-32 h-32': size === 'lg',
      'w-24 h-24': !size || size === 'md',
      'w-14 h-14': size === 'sm',
      'w-10 h-10': size === 'xs',
    }
  )

  const placeholderClasses = clsx(
    'bg-neutral-focus',
    'text-neutral-content',
    {
      'ring ring-offset-base-100 ring-offset-2': border,
      [`ring-${borderColor}`]: borderColor,
      'rounded-btn': shape === 'square',
      'rounded-full': shape === 'circle',
      'w-32 h-32 text-3xl': size === 'lg',
      'w-24 h-24 text-xl': !size || size === 'md',
      'w-14 h-14': size === 'sm',
      'w-10 h-10': size === 'xs',
    }
  )

  return (
    <div
      className={containerClasses}
      style={style}
    >
      {src ?
        (
          <div className={imgClasses}>
            <img src={src} />
          </div>
        ) : 
        (
          <div className={placeholderClasses}>
            <span>
              {letters}
            </span>
          </div>
        )
      }
    </div>
  )
}

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

Avatar.Group = AvatarGroup

export default Avatar