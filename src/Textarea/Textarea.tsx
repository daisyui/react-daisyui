import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentColor, IComponentBaseProps } from '../types'

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
  & IComponentBaseProps
  & {
    color?: ComponentColor
    bordered?: boolean
  }

const Textarea = ({
  bordered,
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
      'textarea-bordered': bordered,
    })
  )

  return <textarea {...props} data-theme={dataTheme} className={classes} />
}

export default Textarea
