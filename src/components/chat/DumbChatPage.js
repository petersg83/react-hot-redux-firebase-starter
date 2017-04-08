import React from 'react';
import ChatModule from './templates/ChatModule';
import RoomModule from './templates/RoomModule';

const DumbChatPage = (props) => <div>
  <h1>Chat {props.currentRoom ? ' - ' + props.currentRoom : ''}</h1>
  {props.currentRoom ? <ChatModule /> : <RoomModule />}
</div>;

DumbChatPage.propTypes = {
  currentRoom: React.PropTypes.string
};

export default DumbChatPage;
