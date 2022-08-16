import React from 'react'
import LeftChat from './LeftChat'
import RightChat from './RightChat'

function ChatFeed() {
  return (
    <div className='bg-danger'>
        <RightChat />
        <LeftChat />
        <RightChat />
        <LeftChat />
        <RightChat />
        <LeftChat />
        <RightChat />
        <LeftChat />
         <RightChat />
        <LeftChat />
    </div>
  )
}

export default ChatFeed