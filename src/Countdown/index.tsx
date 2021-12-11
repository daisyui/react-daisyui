import React from 'react'

export type CountdownProps = {
  value: number
}

const Countdown = ({
  value,
}: CountdownProps): JSX.Element => {
  return (
    <span className="countdown">
      <span style={{ '--value': value }} />
    </span>
  )
}

export default Countdown