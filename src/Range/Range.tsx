import React, { forwardRef, useMemo } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentSize,
} from '../types'

export type RangeProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: ComponentColor
    size?: ComponentSize
    displayTicks?: boolean
    ticksStep: number
  }

const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ color, size, step, displayTicks, ticksStep, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'range',
      className,
      clsx({
        'range-lg': size === 'lg',
        'range-md': size === 'md',
        'range-sm': size === 'sm',
        'range-xs': size === 'xs',
        'range-primary': color === 'primary',
        'range-secondary': color === 'secondary',
        'range-accent': color === 'accent',
        'range-info': color === 'info',
        'range-success': color === 'success',
        'range-warning': color === 'warning',
        'range-error': color === 'error',
      })
    )

    const calculatedDisplayTicks = displayTicks ?? (step !== undefined);
    const calculatedStep = step !== undefined ? Number(step) : 1; // default value per HTML standard
    const calculatedTicksStep = ticksStep ?? calculatedStep;
    const min = props.min !== undefined ? Number(props.min) : 0; // default value per HTML standard
    const max = props.max !== undefined ? Number(props.max) : 100; // default value per HTML standard

    const numTicks = useMemo(() => {
      return Math.ceil((max - min) / calculatedTicksStep) + 1;
    }, [props.min, props.max, ticksStep])

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
        {calculatedDisplayTicks && (
          <div className="w-full flex justify-between text-xs px-2">
            {[...Array(numTicks)].map((_, i) => {
              return <span key={i}>|</span>
            })}
          </div>
        )}
      </>
    )
  }
)

Range.displayName = 'Range'

export default Range
