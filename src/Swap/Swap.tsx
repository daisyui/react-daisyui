import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface SwapProps extends IComponentBaseProps {
    onElement: ReactNode | ReactNode[]
    offElement: ReactNode | ReactNode[]
    active?: boolean
    rotate?: boolean
    flip?: boolean
}

const Swap = ({
  onElement,
  offElement,
  active,
  rotate,
  flip,
  dataTheme,
  className,
  style,
}: SwapProps): JSX.Element => {
  const classes = clsx(
    'swap',
    className,
    {
      'swap-active': active,
      'swap-rotate': rotate,
      'swap-flip': flip,
    }
  )

  return (
    <label
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
        <input type="checkbox"/>
        <div className="swap-on">{onElement}</div>
        <div className="swap-off">{offElement}</div>
    </label>
  )
}

export default Swap
