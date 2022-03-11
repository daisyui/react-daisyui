import React, { ReactNode } from 'react'
  
export type BreadcrumbsItemProps = {
    children?: ReactNode | ReactNode[]
    href?: string
    className?: string
    style?: Record<string, string | number>
}
  
const BreadcrumbsItem = ({
    children,
    href,
    className,
    style,
}: BreadcrumbsItemProps): JSX.Element => {
    return (
        <li
            className={className}
            style={style}
        >
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
