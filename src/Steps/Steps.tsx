import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import Step from './Step'

export type StepsProps = React.HTMLAttributes<HTMLUListElement> &
  IComponentBaseProps & {
    vertical?: boolean
    horizontal?: boolean
  }

const Steps = React.forwardRef<HTMLUListElement, StepsProps>(
  (
    { children, dataTheme, className, vertical, horizontal, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'steps',
      className,
      clsx({
        'steps-vertical': vertical,
        'steps-horizontal': horizontal,
      })
    )

    return (
      <ul
        aria-label="Steps"
        role="group"
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </ul>
    )
  }
)

export default Object.assign(Steps, { Step })
