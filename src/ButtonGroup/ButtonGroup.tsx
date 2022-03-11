import React, { ReactNode } from "react"
import { twMerge } from 'tailwind-merge'

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
  const classes = twMerge(
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
