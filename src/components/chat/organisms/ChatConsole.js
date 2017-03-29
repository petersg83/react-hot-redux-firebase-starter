import React from 'react';
import Message from '../molecules/Message';
import { branch, compose, withHandlers, withState } from 'recompose';
import DumbChatConsole from './DumbChatConsole';
import { addChatMessage } from '../../../actions/chatActions';

const ChatConsole = compose(
  withState('text', 'setText', ''),
  withHandlers({
    submit: (props) => (e) => {
      addChatMessage('room1', {author: 'Pierre', text: props.text})
      props.setText('');
      e.preventDefault();
    }
  })
)(DumbChatConsole);

export default ChatConsole;
