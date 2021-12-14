import React, {ReactNode} from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface ArtboardProps extends IComponentBaseProps {
  children?: ReactNode | ReactNode[]
  size?: 1 | 2 | 3 | 4 | 5 | 6
  horizontal?: boolean
}

const Artboard = ({
  children,
  size,
  horizontal,
  dataTheme,
  className,
  style,
}: ArtboardProps): JSX.Element => {
  const classes = clsx(
    'artboard',
    'artboard-demo',
    className,
    {
      [`phone-${size}`]: size,
      'horizontal': horizontal,
    }
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

export default Artboard
