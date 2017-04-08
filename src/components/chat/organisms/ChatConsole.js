import React from 'react';
import { connect } from 'react-redux';
import Message from '../molecules/Message';
import { compose, withHandlers, withState } from 'recompose';
import DumbChatConsole from './DumbChatConsole';
import { addChatMessage } from '../../../actions/chatActions';

const mapStateToProps = (state) => ({ currentUserUID: state.auth.currentUserUID, currentRoom: state.chat.currentRoom, user: state.user });
const ChatConsole = compose(
  connect(mapStateToProps),
  withState('text', 'setText', ''),
  withHandlers({
    submit: (props) => (e) => {
      addChatMessage(props.currentRoom, {authorId: props.currentUserUID, author: props.user.email, text: props.text, timestamp: new Date().getTime()});
      props.setText('');
      e.preventDefault();
    }
  })
)(DumbChatConsole);


export default ChatConsole;
