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
        'bg-info': status === 'info',
        'bg-success': status === 'success',
        'bg-warning': status === 'warning',
        'bg-error': status === 'error',
        'text-info-content': status === 'info',
        'text-success-content': status === 'success',
        'text-warning-content': status === 'warning',
        'text-error-content': status === 'error',
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
