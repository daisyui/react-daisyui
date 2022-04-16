import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'
import { wrapWithElementIfInvalid } from '../utils'

export type SwapProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  IComponentBaseProps & {
    onElement: ReactNode | ReactNode[]
    offElement: ReactNode | ReactNode[]
    active?: boolean
    rotate?: boolean
    flip?: boolean
  }

const Swap = React.forwardRef<HTMLLabelElement, SwapProps>(
  (
    {
      onElement,
      offElement,
      active,
      rotate,
      flip,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'swap',
      className,
      clsx({
        'swap-active': active,
        'swap-rotate': rotate,
        'swap-flip': flip,
      })
    )

    // These next two pieces allow classname to be added to valid elements, or wrap invalid elements with a div and the classname
    const onEl = wrapWithElementIfInvalid({
      node: onElement,
      wrapper: <div></div>,
      props: { className: 'swap-on' },
    })

    const offEl = wrapWithElementIfInvalid({
      node: offElement,
      wrapper: <div></div>,
      props: { className: 'swap-off' },
    })

    return (
      <label {...props} data-theme={dataTheme} className={classes} ref={ref}>
        <input type="checkbox" />
        {onEl}
        {offEl}
      </label>
    )
  }
)

export default Swap
