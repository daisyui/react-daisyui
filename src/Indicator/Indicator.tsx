import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export interface IndicatorProps extends IComponentBaseProps {
  children?: ReactNode | ReactNode[]
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
  style,
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
    <div className='indicator'>
        <div
            data-theme={dataTheme}
            className={classes}
            style={style}
        >
            {item}
        </div>

        {children}
    </div>
  )
}

export default Indicator