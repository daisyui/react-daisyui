import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type IndicatorProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    item?: ReactNode
    horizontal?: 'start' | 'center' | 'end'
    vertical?: 'top' | 'middle' | 'bottom'
  }

const Indicator = ({
  children,
  item,
  horizontal = 'end',
  vertical = 'top',
  dataTheme,
  className,
  ...props
}: IndicatorProps): JSX.Element => {
  const classes = twMerge(
    'indicator-item',
    className,
    clsx({
      [`indicator-${horizontal}`]: horizontal,
      [`indicator-${vertical}`]: vertical,
    })
  )

  return (
    <div data-theme={dataTheme} className="indicator">
      <div {...props} className={classes}>
        {item}
      </div>

      {children}
    </div>
  )
}

export default Indicator
