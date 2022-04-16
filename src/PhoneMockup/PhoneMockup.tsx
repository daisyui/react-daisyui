import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor } from '../types'

export type PhoneMockupProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    color?: Omit<ComponentColor, 'ghost'>
    innerProps?: React.HTMLAttributes<HTMLDivElement>
    innerRef?: React.Ref<HTMLDivElement>
  }

const PhoneMockup = forwardRef<HTMLDivElement, PhoneMockupProps>(
  (
    { color, dataTheme, className, children, innerRef, innerProps, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'mockup-phone',
      clsx({
        [`border-${color}`]: color,
      }),
      className
    )

    return (
      <div
        aria-label="Phone mockup"
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        <div className="camera" />
        <div className="display">
          <div
            {...innerProps}
            className={twMerge(
              'artboard artboard-demo phone-1',
              innerProps?.className
            )}
            ref={innerRef}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)

PhoneMockup.displayName = 'PhoneMockup'

export default PhoneMockup
