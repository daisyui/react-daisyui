import React from 'react'
import clsx from 'clsx'

import {
    IComponentBaseProps,
    ComponentSize,
} from '../types'

export interface RadioProps extends IComponentBaseProps {
    name?: string
    defaultChecked?: boolean
    color?: "primary" | "secondary" | "accent"
    size?: ComponentSize
    disabled?: boolean
}

const Radio = ({
    name,
    defaultChecked = false,
    color,
    size,
    disabled,
    dataTheme,
    className,
    style,
}: RadioProps): JSX.Element => {
    const classes = clsx(
        'radio',
        className,
        {
        [`radio-${size}`]: size,
        [`radio-${color}`]: color,
        }
    )

    return (
        <input
            type="radio"
            name={name}
            defaultChecked={defaultChecked}
            data-theme={dataTheme}
            className={classes}
            style={style}
            disabled={disabled}
        />
    )
}

export default Radio
