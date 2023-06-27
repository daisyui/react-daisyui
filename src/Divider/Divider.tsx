import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type DividerProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    vertical?: boolean
    horizontal?: boolean
    responsive?: boolean
  }

const Divider = ({
  children,
  vertical,
  horizontal,
  responsive,
  dataTheme,
  className,
  ...props
}: DividerProps): JSX.Element => {
  const classes = twMerge(
    'divider',
    className,
    clsx({
      'divider-vertical': vertical,
      'divider-horizontal': horizontal,
      'lg:divider-horizontal': responsive,
    })
  )

  return (
    <div role="separator" {...props} data-theme={dataTheme} className={classes}>
      {children}
    </div>
  )
}

export default Divider
