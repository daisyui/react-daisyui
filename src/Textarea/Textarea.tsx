import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'

import { ComponentColor } from '../types'

export type TextareaProps =
    & React.TextareaHTMLAttributes<HTMLTextAreaElement>
    & {
    color?: ComponentColor
    bordered?: boolean
}

const Textarea = ({
    bordered,
    color,
    className,
    ...props
}: TextareaProps): JSX.Element => {
    const classes = clsx(
        'textarea',
        className,
        {
            [`textarea-${color}`]: color,
            'textarea-bordered': bordered
        }
    )

    return <textarea className={classes} {...props} />
}

export default Textarea
