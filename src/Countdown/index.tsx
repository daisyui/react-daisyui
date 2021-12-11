import React from 'react'
import clsx from 'clsx'

export type CountdownProps = {
  value: number
  className?: string
  style?: Record<string, string | number>
}

const Countdown = ({
  value,
  className,
  style,
}: CountdownProps): JSX.Element => {
  const classes = clsx(
    'countdown',
    className,
  )

  const displayedValue = Math.min(99, Math.max(0, value))

  return (
    <span
      className={classes}
      style={style}
    >
      <span style={{ '--value': displayedValue }} />
    </span>
  )
}

export default Countdown