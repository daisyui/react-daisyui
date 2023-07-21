import React from 'react'

type Anchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  anchor?: true
}

type NoAnchor = Pick<Anchor, 'children'> & { anchor?: false }

export type DropdownItemProps = Anchor | NoAnchor

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
