import React from 'react';
import ChatModule from './templates/ChatModule'
import RoomModule from './templates/RoomModule'

const DumbChatPage = (props) => <div>
  <h1>Chat</h1>
  {props.currentRoom ? <ChatModule /> : <RoomModule />}
</div>;

export default DumbChatPage;
