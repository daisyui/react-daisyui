import React from 'react'

import { IComponentBaseProps } from '../types'

export type ThemeProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Theme = ({
  children,
  dataTheme,
  className,
  ...props
}: ThemeProps): JSX.Element => {
  return (
    <div {...props} data-theme={dataTheme} className={className}>
      {children}
    </div>
  )
}

export default Theme
