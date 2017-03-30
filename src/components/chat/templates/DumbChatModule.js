import React from 'react'
import MessageList from '../organisms/MessageList'
import ChatConsole from '../organisms/ChatConsole'
import LeaveRoom from '../molecules/LeaveRoom'

const DumbChatModule = (props) => <div>
  <LeaveRoom />
  <MessageList />
  <ChatConsole />
</div>

export default DumbChatModule
