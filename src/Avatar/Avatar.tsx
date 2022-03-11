import React, { LegacyRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import AvatarGroup from './AvatarGroup'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize,
} from '../types'

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    ref?: LegacyRef<HTMLDivElement>
    src?: string
    letters?: string
    size?: ComponentSize
    shape?: ComponentShape
    border?: boolean
    borderColor?: ComponentColor
    online?: boolean
    offline?: boolean
  }

const Avatar = ({
  ref,
  src,
  letters,
  size,
  shape,
  border,
  borderColor,
  online,
  offline,
  dataTheme,
  className,
  ...props
}: AvatarProps): JSX.Element => {
  const containerClasses = twMerge(
    'avatar',
    className,
    clsx({
      online: online,
      offline: offline,
      placeholder: !src,
    })
  )

  const imgClasses = clsx({
    'ring ring-offset-base-100 ring-offset-2': border,
    [`ring-${borderColor}`]: borderColor,
    'rounded-btn': shape === 'square',
    'rounded-full': shape === 'circle',
    'w-32 h-32': size === 'lg',
    'w-24 h-24': !size || size === 'md',
    'w-14 h-14': size === 'sm',
    'w-10 h-10': size === 'xs',
  })

  const placeholderClasses = clsx('bg-neutral-focus', 'text-neutral-content', {
    'ring ring-offset-base-100 ring-offset-2': border,
    [`ring-${borderColor}`]: borderColor,
    'rounded-btn': shape === 'square',
    'rounded-full': shape === 'circle',
    'w-32 h-32 text-3xl': size === 'lg',
    'w-24 h-24 text-xl': !size || size === 'md',
    'w-14 h-14': size === 'sm',
    'w-10 h-10': size === 'xs',
  })

  return (
    <div
      {...props}
      ref={ref}
      data-theme={dataTheme}
      className={containerClasses}
    >
      {src ? (
        <div className={imgClasses}>
          <img src={src} />
        </div>
      ) : (
        <div className={placeholderClasses}>
          <span>{letters}</span>
        </div>
      )}
    </div>
  )
}

Avatar.Group = AvatarGroup

export default Avatar
