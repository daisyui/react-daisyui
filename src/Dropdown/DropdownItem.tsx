import React from 'react'

export type DropdownItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  href?: string
}

const DropdownItem = React.forwardRef<HTMLLIElement, DropdownItemProps>(
  ({ children, href, ...props }, ref) => {
    return (
      <li role={href ? 'link' : undefined} {...props} ref={ref}>
        {href ? <a href={href}>{children}</a> : <>{children}</>}
      </li>
    )
  }
)

export default DropdownItem
