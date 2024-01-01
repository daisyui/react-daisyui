import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type MaskProps = React.ImgHTMLAttributes<HTMLImageElement> &
  IComponentBaseProps & {
    variant?:
      | 'squircle'
      | 'heart'
      | 'hexagon'
      | 'hexagon-2'
      | 'decagon'
      | 'pentagon'
      | 'diamond'
      | 'square'
      | 'circle'
      | 'parallelogram'
      | 'parallelogram-2'
      | 'parallelogram-3'
      | 'parallelogram-4'
      | 'star'
      | 'star-2'
      | 'triangle'
      | 'triangle-2'
      | 'triangle-3'
      | 'triangle-4'
      | 'half-1'
      | 'half-2'
  }
const classesFn = ({
  className,
  variant,
}: Pick<MaskProps, 'className' | 'variant'> = {}) =>
  twMerge(
    'mask',
    className,
    clsx({
      'mask-squircle': variant === 'squircle',
      'mask-heart': variant === 'heart',
      'mask-hexagon': variant === 'hexagon',
      'mask-hexagon-2': variant === 'hexagon-2',
      'mask-decagon': variant === 'decagon',
      'mask-pentagon': variant === 'pentagon',
      'mask-diamond': variant === 'diamond',
      'mask-square': variant === 'square',
      'mask-circle': variant === 'circle',
      'mask-parallelogram': variant === 'parallelogram',
      'mask-parallelogram-2': variant === 'parallelogram-2',
      'mask-parallelogram-3': variant === 'parallelogram-3',
      'mask-parallelogram-4': variant === 'parallelogram-4',
      'mask-star': variant === 'star',
      'mask-star-2': variant === 'star-2',
      'mask-triangle': variant === 'triangle',
      'mask-triangle-2': variant === 'triangle-2',
      'mask-triangle-3': variant === 'triangle-3',
      'mask-triangle-4': variant === 'triangle-4',
      'mask-half-1': variant === 'half-1',
      'mask-half-2': variant === 'half-2',
    })
  )

const Mask = React.forwardRef<HTMLImageElement, MaskProps>(
  ({ src, variant, dataTheme, className, ...props }, ref): JSX.Element => {
    return (
      <img
        {...props}
        data-theme={dataTheme}
        className={classesFn({ className, variant })}
        src={src}
        ref={ref}
      />
    )
  }
)
Mask.displayName = 'Mask'
export default Object.assign(Mask, { className: classesFn })
