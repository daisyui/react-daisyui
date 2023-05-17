import React from 'react'

export type DropdownItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const DropdownItem = React.forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <li className={className} role="menuitem">
        <a ref={ref} {...props}></a>
      </li>
    )
  }
)

export default DropdownItem
