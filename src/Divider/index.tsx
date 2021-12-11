import React from 'react'
import clsx from 'clsx'

export type DividerProps = {
  children?: string
  vertical?: boolean
  className?: string
  style?: Record<string, string | number>
}

const Divider = ({
  children,
  vertical,
  className,
  style,
}: DividerProps): JSX.Element => {
  const classes = clsx(
    'divider',
    className,
    {
      'divider-vertical': vertical,
    }
  )

  return (
    <div
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

export default Divider