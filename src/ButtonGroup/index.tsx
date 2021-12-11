import React, { ReactNode } from "react"

export type ButtonGroupProps = {
  children?: ReactNode | ReactNode[]
}

const ButtonGroup = ({
  children
}: ButtonGroupProps): JSX.Element => {
  return (
    <div className="btn-group">
      {children}
    </div>
  )
}

export default ButtonGroup
