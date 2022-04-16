import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'
import { CodeMockupLine } from './CodeMockupLine'

export type CodeMockupProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const CodeMockup = forwardRef<HTMLDivElement, CodeMockupProps>(
  ({ dataTheme, className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge('mockup-code', className)

    return (
      <div
        aria-label="Code mockup"
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

CodeMockup.displayName = 'CodeMockup'
const CodeMockupNamespace = Object.assign(CodeMockup, { Line: CodeMockupLine })

export { CodeMockupNamespace as CodeMockup }
