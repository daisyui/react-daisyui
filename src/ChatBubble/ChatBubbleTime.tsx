import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type ChatBubbleTimeProps = React.TimeHTMLAttributes<HTMLTimeElement> &
  IComponentBaseProps

const ChatBubbleTime = React.forwardRef<HTMLTimeElement, ChatBubbleTimeProps>(
  ({ className, ...props }, ref) => (
    <time
      {...props}
      className={twMerge('text-xs opacity-50', className)}
      ref={ref}
    />
  )
)

export default ChatBubbleTime
