import React from 'react';
import MessageList from '../organisms/MessageList';
import ChatConsole from '../organisms/ChatConsole';
import LeaveRoom from '../molecules/LeaveRoom';
import ActiveUserList from '../organisms/ActiveUserList';

const DumbChatModule = (props) => <div>
  <LeaveRoom />
  <MessageList />
  <ChatConsole />
  <ActiveUserList />
</div>;

export default DumbChatModule;
