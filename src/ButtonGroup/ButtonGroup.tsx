import React, { ReactNode } from "react"
import clsx from 'clsx'

import { IComponentBaseProps } from "../types"

export interface ButtonGroupProps extends IComponentBaseProps {
  children?: ReactNode | ReactNode[]
}

const ButtonGroup = ({
  children,
  dataTheme,
  className,
  style
}: ButtonGroupProps): JSX.Element => {
  const classes = clsx(
    'btn-group',
    className
  )

  return (
    <div
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

export default ButtonGroup
