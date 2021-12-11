import React, { ReactNode } from "react"
import clsx from 'clsx'

export type ButtonGroupProps = {
  children?: ReactNode | ReactNode[]
  className?: string
  style?: Record<string, string | number>
}

const ButtonGroup = ({
  children,
  className,
  style
}: ButtonGroupProps): JSX.Element => {
  const classes = clsx(
    'btn-group',
    className
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

export default ButtonGroup
