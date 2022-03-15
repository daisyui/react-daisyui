import React from 'react'

export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>

const CardImage = ({ ...props }: CardImageProps) => {
  return (
    <figure>
      <img {...props} />
    </figure>
  )
}

export default CardImage
