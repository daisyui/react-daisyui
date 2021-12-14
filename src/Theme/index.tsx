import React, { ReactNode } from 'react'

import { IComponentBaseProps } from '../types'

export interface ThemeProps extends IComponentBaseProps {
  children: ReactNode | ReactNode[]
}

const Theme = ({
  children,
  dataTheme,
  className,
  style,
}: ThemeProps): JSX.Element => {
  return (
    <div
      data-theme={dataTheme}
      className={className}
      style={style}
    >
      {children}
    </div>
  )
}

export default Theme