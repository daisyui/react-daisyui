import React, { ReactNode } from 'react'

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
    return (
        <div
            id={`item${index}`} 
            className="carousel-item"
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
