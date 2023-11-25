import React from 'react'

type IConnectType = 'both' | 'start' | 'end'
type TimelineItemProps = React.HTMLAttributes<HTMLLIElement> & {
  connect?: IConnectType
  startClassName?: string
  endClassName?: string
}

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  (
    { children, className, connect, startClassName, endClassName, ...props },
    ref
  ) => {
    return (
      <li {...props} className={className} ref={ref}>
        {(connect === 'both' || connect === 'start') && (
          <hr className={startClassName} />
        )}
        {children}
        {(connect === 'both' || connect === 'end') && (
          <hr className={endClassName} />
        )}
      </li>
    )
  }
)

TimelineItem.displayName = 'TimelineItem'
export default TimelineItem
