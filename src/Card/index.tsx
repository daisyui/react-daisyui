import React, { ReactNode } from 'react'
import clsx from 'clsx'

export type CardProps = {
  src?: string
  title?: string
  description?: string
  actions?: ReactNode | ReactNode[]
  bordered?: boolean
  compact?: boolean
  className?: string
  style?: Record<string, string | number>
}

const Card = ({
  src,
  title,
  description,
  actions,
  bordered,
  compact,
  className,
  style,
}: CardProps): JSX.Element => {
  const classes = clsx(
    'card',
    className,
    {
      'bordered': bordered,
      'compact': compact,
    }
  )

  return (
    <div 
      className={classes}
      style={style}
    >
      <div className="card-body">
        <figure>
          <img src={src} />
        </figure>
        <h2 className="card-title">
          {title}
        </h2>
        <p>{description}</p>
        <div className="card-actions">
          {actions}
        </div>
      </div>
    </div>
  )
}

export default Card
