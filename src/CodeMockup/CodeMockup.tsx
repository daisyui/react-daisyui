import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'
import { CodeMockupLine } from './CodeMockupLine'

export type CodeProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const CodeMockup = forwardRef<HTMLDivElement, CodeProps>(
  ({ dataTheme, className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge('mockup-code', className)

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

CodeMockup.displayName = 'CodeMoickup'
const CodeMockupNamespace = Object.assign(CodeMockup, { Line: CodeMockupLine })

export { CodeMockupNamespace as CodeMockup }
