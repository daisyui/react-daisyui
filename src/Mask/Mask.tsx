import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export interface MaskProps extends IComponentBaseProps {
    src: string
    variant?:
        | "squircle"
        | "heart"
        | "hexagon"
        | "hexagon-2"
        | "decagon"
        | "pentagon"
        | "diamond"
        | "square"
        | "circle"
        | "parallelogram"
        | "parallelogram-2"
        | "parallelogram-3"
        | "parallelogram-4"
        | "star"
        | "star-2"
        | "triangle"
        | "triangle-2"
        | "triangle-3"
        | "triangle-4"
        | "half-1"
        | "half-2"
}

const Mask = ({
    src,
    variant,
    dataTheme,
    className,
    style,
}: MaskProps): JSX.Element => {
    const classes = twMerge(
        'mask',
        className,
        clsx({
            [`mask-${variant}`]: variant,
        })
    )

    return (
        <img
            data-theme={dataTheme}
            className={classes}
            style={style}
            src={src}
        />
    )
}

export default Mask
