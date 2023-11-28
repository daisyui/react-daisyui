import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Skeleton, { SkeletonProps } from '.'

const meta: Meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<SkeletonProps> = (args) => {
  return <Skeleton {...args} />
}
Default.args = {
  className: 'w-32 h-32',
}

export const CircleWithContent: Story<SkeletonProps> = ({ dataTheme }) => {
  return (
    <div className="flex flex-col gap-4 w-52" data-theme={dataTheme}>
      <div className="flex gap-4 items-center">
        <Skeleton className="w-16 h-16 rounded-full shrink-0"></Skeleton>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-20"></Skeleton>
          <Skeleton className="h-4 w-28"></Skeleton>
        </div>
      </div>
      <Skeleton className="h-32 w-full"></Skeleton>
    </div>
  )
}

export const RectangleWithContent: Story<SkeletonProps> = ({ dataTheme }) => {
  return (
    <div className="flex flex-col gap-4 w-52" data-theme={dataTheme}>
      <Skeleton className="h-32 w-full"></Skeleton>
      <Skeleton className="h-4 w-28"></Skeleton>
      <Skeleton className="h-4 w-full"></Skeleton>
      <Skeleton className="h-4 w-full"></Skeleton>
    </div>
  )
}
