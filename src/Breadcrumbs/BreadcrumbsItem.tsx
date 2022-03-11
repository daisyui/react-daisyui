import React from 'react'
  
export type BreadcrumbsItemProps =
    & React.LiHTMLAttributes<HTMLLIElement>
    & {
        href?: string
}
  
const BreadcrumbsItem = ({
    children,
    href,
    ...props
}: BreadcrumbsItemProps): JSX.Element => {
    return (
        <li {...props}>
            {href ?
            (
                <a href={href}>
                {children}
                </a>
            ) :
            (
                <>
                {children}
                </>
            )}
        </li>
    )
}

export default BreadcrumbsItem
