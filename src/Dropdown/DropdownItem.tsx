import React from 'react'

export type DropdownItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const DropdownItem = ({ className, ...props }: DropdownItemProps) => {
  return (
    <li className={className}>
      <a {...props} />
    </li>
  )
}

export default DropdownItem
