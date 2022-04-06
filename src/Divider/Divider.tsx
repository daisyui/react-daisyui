import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type DividerProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    vertical?: boolean
  }

const Divider = ({
  children,
  vertical,
  dataTheme,
  className,
  ...props
}: DividerProps): JSX.Element => {
  const classes = twMerge(
    'divider',
    className,
    clsx({
      'divider-vertical': vertical,
    })
  )

  return (
    <div role="separator" {...props} data-theme={dataTheme} className={classes}>
      {children}
    </div>
  )
}

export default Divider
