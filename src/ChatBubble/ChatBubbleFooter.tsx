import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type ChatBubbleFooterProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const ChatBubbleFooter = React.forwardRef<
  HTMLDivElement,
  ChatBubbleFooterProps
>(({ className, ...props }, ref) => (
  <div
    {...props}
    className={twMerge('chat-footer opacity-50', className)}
    ref={ref}
  />
))

export default ChatBubbleFooter
