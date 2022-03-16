import React, { ReactNode } from 'react'

import { useGlobalTheme } from './theming'

import Navbar from '../src/Navbar'
import Theme from '../src/Theme'

type Props = {
  children: ReactNode | ReactNode[]
  title?: any
  description?: string
}

const StoryLayout = ({ children, title, description }: Props): JSX.Element => {
  const globalTheme = useGlobalTheme()

  return (
    <Theme dataTheme={globalTheme} className="w-full h-screen p-8 bg-base-100">
      <Navbar className="p-0 border-b border-neutral text-base-content">
        <Navbar.Start>
          <span className="text-lg font-bold">react-daisyui</span>
        </Navbar.Start>
      </Navbar>

      <div className="w-full h-full my-4">
        <h1 className="text-4xl text-base-content font-bold">{title}</h1>
        <p className="text-base-content">{description}</p>
        <div className="my-4">{children}</div>
      </div>
    </Theme>
  )
}

export default StoryLayout
