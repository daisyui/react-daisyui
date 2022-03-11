import React from 'react'

import { IComponentBaseProps } from '../types'

export type CollapseTitleProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const CollapseTitle = ({
  children,
  ...props
}: CollapseTitleProps): JSX.Element => {
  return (
    <div {...props} className="collapse-title">
      {children}
    </div>
  )
}

export default CollapseTitle
