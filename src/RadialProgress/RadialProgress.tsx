import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type RadialProgressProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    value: number
  }

const RadialProgress = forwardRef<HTMLDivElement, RadialProgressProps>(
  ({ value, dataTheme, className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge('radial-progress', className)

    const displayedValue = Math.min(100, Math.max(0, value))
    const progressStyle: Record<string, number> = { '--value': displayedValue }

    return (
      <div
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
        style={progressStyle}
      >
        {children}
      </div>
    )
  }
)

RadialProgress.displayName = 'RadialProgress'

export default RadialProgress
