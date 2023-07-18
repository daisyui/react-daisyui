import React from 'react'

export type DropdownItemProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { anchor?: boolean }

const DropdownItem = React.forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ anchor = true, ...props }, ref) => {
    return (
      <li role="menuitem">
        {anchor ? <a ref={ref} {...props}></a> : props.children}
      </li>
    )
  }
)

export default DropdownItem
