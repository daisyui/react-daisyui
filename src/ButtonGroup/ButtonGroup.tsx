import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import { ButtonProps } from '../Button'

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    vertical?: boolean
    children: ReactElement<ButtonProps>[]
  }

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ vertical, children, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('btn-group', className, clsx({
      'btn-group-vertical': vertical
    }))

    return (
      <div
        aria-label={`Group of ${children.length} buttons`}
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default ButtonGroup
