import React, { forwardRef } from 'react'
import clsx from 'clsx'

import {
    IComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'

export type InputProps =
    & React.InputHTMLAttributes<HTMLInputElement>
    & IComponentBaseProps
    & {
        value?: string
        placeholder?: string
        bordered?: boolean
        size?: ComponentSize
        color?: ComponentColor
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    value,
    placeholder,
    bordered,
    size,
    color,
    dataTheme,
    className,
    ...props
}, ref): JSX.Element => {
    const classes = clsx(
        'input',
        className,
        {
            [`input-${size}`]: size,
            [`input-${color}`]: color,
            'input-bordered': bordered,
        }
    )

    return (
        <input
            {...props}
            ref={ref}
            type="text"
            value={value}
            placeholder={placeholder}
            data-theme={dataTheme}
            className={classes}
        />
    )
})

Input.displayName = "Input"

export default Input
