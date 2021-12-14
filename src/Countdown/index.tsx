import React from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface CountdownProps extends IComponentBaseProps {
  value: number
}

const Countdown = ({
  value,
  dataTheme,
  className,
  style,
}: CountdownProps): JSX.Element => {
  const classes = clsx(
    'countdown',
    className,
  )

  const displayedValue = Math.min(99, Math.max(0, value))
  const countdownStyle: Record<string, number> =
    { '--value': displayedValue }

  return (
    <span
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
      <span style={countdownStyle} />
    </span>
  )
}

export default Countdown