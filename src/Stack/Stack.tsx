import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentPosition } from '../types'

export type StackProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    position?: Exclude<ComponentPosition, 'left' | 'right' | 'middle'>
  }

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    { position = 'bottom', dataTheme, className, children, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'stack',
      className,
      clsx({
        'stack-end': position === 'end',
        'stack-start': position === 'start',
        'stack-top': position === 'top',
        'stack-bottom': position === 'bottom',
      })
    )

    return (
      <div
        aria-label="Stack"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        {children}
      </div>
    )
  }
)

Stack.displayName = 'Stack'

export default Stack
