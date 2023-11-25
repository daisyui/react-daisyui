import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type TimelineStartProps = React.HTMLAttributes<HTMLDivElement> & {
  box?: boolean
}

const TimelineStart = React.forwardRef<HTMLDivElement, TimelineStartProps>(
  ({ children, className, box, ...props }, ref) => {
    const classes = twMerge(
      'timeline-start',
      clsx({
        'timeline-box': box,
      }),
      className
    )
    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

TimelineStart.displayName = 'TimelineStart'
export default TimelineStart
