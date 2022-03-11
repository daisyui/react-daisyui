import React, { LegacyRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import Step from './Step'

export type StepsProps = React.HTMLAttributes<HTMLUListElement> &
  IComponentBaseProps & {
    ref?: LegacyRef<HTMLUListElement>
    vertical?: boolean
    horizontal?: boolean
  }

const Steps = ({
  children,
  ref,
  dataTheme,
  className,
  ...props
}: StepsProps): JSX.Element => {
  const classes = twMerge('steps', className)

  return (
    <ul {...props} ref={ref} data-theme={dataTheme} className={classes}>
      {children}
    </ul>
  )
}

Steps.Step = Step

export default Steps
