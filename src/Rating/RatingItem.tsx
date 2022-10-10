import React from 'react'

export type RatingItemProps = React.InputHTMLAttributes<HTMLInputElement>

const RatingItem = ({ ...props }: RatingItemProps): JSX.Element => {
  return <input {...props} type="checkbox" />
}

export default RatingItem
