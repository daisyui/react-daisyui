import React, {ReactNode} from 'react'
import clsx from 'clsx'

export type ArtboardProps = {
  children?: ReactNode | ReactNode[]
  size?: 1 | 2 | 3 | 4 | 5 | 6
  horizontal?: boolean
  className?: string
  style?: Record<string, string | number>
}

const Artboard = ({
  children,
  size,
  horizontal,
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
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

export default Artboard