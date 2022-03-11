import React from 'react'

import { IComponentBaseProps } from '../types'

export type CollapseContentProps = 
    & React.HTMLAttributes<HTMLDivElement>
    & IComponentBaseProps

const CollapseContent = ({
    children,
    ...props
}: CollapseContentProps): JSX.Element => {
    return <div {...props} className="collapse-content">{children}</div>
}

export default CollapseContent
