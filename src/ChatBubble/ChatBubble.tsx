import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'
import ChatBubbleAvatar from './ChatBubbleAvatar'
import ChatBubbleMessage from './ChatBubbleMessage'
import ChatBubbleHeader from './ChatBubbleHeader'
import ChatBubbleTime from './ChatBubbleTime'
import ChatBubbleFooter from './ChatBubbleFooter'

export type ChatBubbleProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    end?: boolean
  }

const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(
  (
    { end = false, color, dataTheme, className, children, ...props },
    ref
  ): JSX.Element => (
    <div
      {...props}
      data-theme={dataTheme}
      className={twMerge('chat', `chat-${end ? 'end' : 'start'}`, className)}
      ref={ref}
    >
      {children}
    </div>
  )
)

ChatBubble.displayName = 'ChatBubble'

export default Object.assign(ChatBubble, {
  Header: ChatBubbleHeader,
  Time: ChatBubbleTime,
  Avatar: ChatBubbleAvatar,
  Message: ChatBubbleMessage,
  Footer: ChatBubbleFooter,
})
