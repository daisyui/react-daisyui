import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentColor } from '../types'

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    color?: ComponentColor
    bordered?: boolean
  }

const Textarea = ({
  bordered,
  color,
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

  return <textarea {...props} className={classes} />
}

export default Textarea
