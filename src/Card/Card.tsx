import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface CardProps extends IComponentBaseProps {
  src?: string
  title?: string
  description?: string
  actions?: ReactNode | ReactNode[]
  bordered?: boolean
  compact?: boolean
}

const Card = ({
  src,
  title,
  description,
  actions,
  bordered,
  compact,
  dataTheme,
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
      data-theme={dataTheme}
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
