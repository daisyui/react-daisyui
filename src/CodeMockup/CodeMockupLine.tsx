import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentStatus, IComponentBaseProps } from '../types'

export type CodeMockupLineProps = React.HTMLAttributes<HTMLPreElement> &
  IComponentBaseProps & {
    dataPrefix?: string | boolean
    status?: ComponentStatus
    innerProps?: React.HTMLAttributes<HTMLElement>
    innerRef?: React.Ref<HTMLElement>
  }

export const CodeMockupLine = forwardRef<HTMLPreElement, CodeMockupLineProps>(
  (
    {
      dataPrefix,
      dataTheme,
      status,
      className,
      children,
      innerProps,
      innerRef,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      clsx({
        [`bg-${status}`]: status,
        [`text-${status}-content`]: status,
      }),
      className
    )

    const allProps = {
      ...props,
      className: classes,
      ...(dataPrefix !== false && { 'data-prefix': dataPrefix || '>' }),
    } as Record<string, any>

    return (
      <pre {...allProps} data-theme={dataTheme} className={classes} ref={ref}>
        <code {...innerProps} ref={innerRef}>
          {children}
        </code>
      </pre>
    )
  }
)

CodeMockupLine.displayName = 'CodeMockup.Line'
