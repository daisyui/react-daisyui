import React, { ReactNode } from 'react'
import clsx from 'clsx'

export type CarouselItemProps = {
    children?: ReactNode | ReactNode[]
    src?: string
    index?: number
}  

const CarouselItem = ({
    children,
    src,
    index,
}: CarouselItemProps): JSX.Element => {
    const classes = clsx(
        "carousel-item",
    )
  
    return (
        <div
            id={`item${index}`} 
            className={classes}
        >
            {src ? 
            (
                <img src={src}/>
            ) :
            (
                children
            )
            }
        </div>
    )
}
  
export default CarouselItem
