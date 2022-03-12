import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type SwapProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  IComponentBaseProps & {
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
  ...props
}: SwapProps): JSX.Element => {
  const classes = twMerge(
    'swap',
    className,
    clsx({
      'swap-active': active,
      'swap-rotate': rotate,
      'swap-flip': flip,
    })
  )

  return (
    <label {...props} data-theme={dataTheme} className={classes}>
      <input type="checkbox" />
      <div className="swap-on">{onElement}</div>
      <div className="swap-off">{offElement}</div>
    </label>
  )
}

export default Swap
