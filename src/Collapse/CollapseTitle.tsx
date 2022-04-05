import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type CollapseTitleProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const CollapseTitle = ({
  children,
  className,
  ...props
}: CollapseTitleProps): JSX.Element => {
  const classes = twMerge('collapse-title', className)

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

export default CollapseTitle
