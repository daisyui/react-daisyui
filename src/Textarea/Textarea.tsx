import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentColor, IComponentBaseProps } from '../types'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  IComponentBaseProps & {
    color?: ComponentColor
    bordered?: boolean
    borderOffset?: boolean
  }

const Textarea = ({
  bordered = true,
  borderOffset,
  color,
  dataTheme,
  className,
  ...props
}: TextareaProps): JSX.Element => {
  const classes = twMerge(
    'textarea',
    className,
    clsx({
      [`textarea-${color}`]: color,
      [`focus:outline-offset-0`]: !borderOffset,
      'textarea-bordered': bordered,
    })
  )

  return <textarea {...props} data-theme={dataTheme} className={classes} />
}

export default Textarea
