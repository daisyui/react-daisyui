import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type ChatBubbleHeaderProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const ChatBubbleHeader = React.forwardRef<
  HTMLDivElement,
  ChatBubbleHeaderProps
>(({ className, ...props }, ref) => (
  <div {...props} className={twMerge('chat-header', className)} ref={ref} />
))

export default ChatBubbleHeader
