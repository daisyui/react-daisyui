import React, { forwardRef, useMemo } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentBrandColors,
  ComponentSize,
} from '../types'

export type RangeProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: ComponentBrandColors
    size?: ComponentSize
  }

const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ color, size, step, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'range',
      className,
      clsx({
        [`range-${size}`]: size,
        [`range-${color}`]: color,
      })
    )

    const numSteps = useMemo(() => {
      const safeStep = Math.max(1, Number(step))
      return Math.ceil(100 / safeStep) ?? 1
    }, [props.max, step])

    return (
      <>
        <input
          {...props}
          ref={ref}
          type="range"
          step={step}
          data-theme={dataTheme}
          className={classes}
        />
        {step != null && (
          <div className="w-full flex justify-between text-xs px-2">
            {[...Array(numSteps + 1)].map(() => {
              return <span>|</span>
            })}
          </div>
        )}
      </>
    )
  }
)

Range.displayName = 'Range'

export default Range
