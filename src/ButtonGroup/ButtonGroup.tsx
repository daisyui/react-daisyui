import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const ButtonGroup = ({
  children,
  dataTheme,
  className,
  ...props
}: ButtonGroupProps): JSX.Element => {
  const classes = twMerge('btn-group', className)

  return (
    <div {...props} data-theme={dataTheme} className={classes}>
      {children}
    </div>
  )
}

export default ButtonGroup
