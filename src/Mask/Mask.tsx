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

const Mask = React.forwardRef<HTMLImageElement, MaskProps>(
  ({ src, variant, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'mask',
      className,
      clsx({
        [`mask-${variant}`]: variant,
      })
    )

    return (
      <img
        {...props}
        data-theme={dataTheme}
        className={classes}
        src={src}
        ref={ref}
      />
    )
  }
)
export default Mask
