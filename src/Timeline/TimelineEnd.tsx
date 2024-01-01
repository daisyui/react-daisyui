import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type TimelineStartProps = React.HTMLAttributes<HTMLDivElement> & {
  box?: boolean
}

const TimelineEnd = React.forwardRef<HTMLDivElement, TimelineStartProps>(
  ({ children, className, box = true, ...props }, ref) => {
    const classes = twMerge(
      'timeline-end',
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

TimelineEnd.displayName = 'TimelineEnd'
export default TimelineEnd
