import * as React from 'react'
import { forwardRef, useMemo } from 'react'
import type { JSX } from 'react'
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
    ticksStep?: number
  }

const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ color, size, step, displayTicks, ticksStep, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'range',
      className,
      clsx({
        'range-xl': size === 'xl',
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
    const calculatedTicksStep = !!ticksStep ? ticksStep : calculatedStep;
    const min = props.min !== undefined ? Number(props.min) : 0; // default value per HTML standard
    const max = props.max !== undefined ? Number(props.max) : 100; // default value per HTML standard

    // use Math.max to solve multiple issues with negative numbers throwing errors
    const numTicks = Math.max(Math.ceil((max - min) / calculatedTicksStep), 1) + 1;

    // Only render ticks if numTicks is a safe, positive integer
    const shouldRenderTicks = Number.isSafeInteger(numTicks) && numTicks > 0 && numTicks < 1000;

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
        {calculatedDisplayTicks && shouldRenderTicks && (
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
