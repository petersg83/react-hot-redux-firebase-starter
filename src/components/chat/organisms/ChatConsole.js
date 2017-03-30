import React from 'react';
import { connect } from 'react-redux';
import Message from '../molecules/Message';
import { branch, compose, lifecycle, withHandlers, withState } from 'recompose';
import DumbChatConsole from './DumbChatConsole';
import { addChatMessage } from '../../../actions/chatActions';

const mapStateToProps = (state) => ({ currentUserUID: state.auth.currentUserUID });
const ChatConsole = compose(
  connect(mapStateToProps),
  withState('text', 'setText', ''),
  withHandlers({
    submit: (props) => (e) => {
      addChatMessage('room1', {authorId: props.currentUserUID, text: props.text, timestamp: new Date().getTime()})
      props.setText('');
      e.preventDefault();
    }
  })
)(DumbChatConsole);


export default ChatConsole;
