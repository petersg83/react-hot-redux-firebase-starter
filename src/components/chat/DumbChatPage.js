import React from 'react';
import MessageList from './organisms/MessageList';
import ChatConsole from './organisms/ChatConsole';

const DumbChatPage = (props) => <div>
  <h1>Chat</h1>
  <MessageList />
  <ChatConsole />
</div>;

export default DumbChatPage;
