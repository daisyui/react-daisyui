import React from 'react'
import clsx from 'clsx'

import {
    IComponentBaseProps,
    ComponentColor,
    ComponentSize,
} from '../types'

export interface InputProps extends IComponentBaseProps {
    value?: string
    placeholder?: string
    onChange?: (value: string) => void
    bordered?: boolean
    size?: ComponentSize
    color?: ComponentColor
}

const Input = ({
    value,
    placeholder,
    onChange,
    bordered,
    size,
    color,
    dataTheme,
    className,
    style,
}: InputProps): JSX.Element => {
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
            type="text"
            value={value}
            onChange={(e) => onChange && onChange(e.currentTarget.value)}
            placeholder={placeholder}
            data-theme={dataTheme}
            className={classes}
            style={style}
        />
    )
}

export default Input
