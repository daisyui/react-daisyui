import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type CountdownProps = React.HTMLAttributes<HTMLSpanElement> &
  IComponentBaseProps & {
    value: number
  }

const Countdown = ({
  value,
  dataTheme,
  className,
  ...props
}: CountdownProps): JSX.Element => {
  const classes = twMerge('countdown', className)

  const displayedValue = Math.min(99, Math.max(0, value))
  const countdownStyle: Record<string, number> = { '--value': displayedValue }

  return (
    <span role="timer" {...props} data-theme={dataTheme} className={classes}>
      <span style={countdownStyle} />
    </span>
  )
}

export default Countdown
