import React from 'react';
import Message from '../molecules/Message';
import { branch, compose, lifecycle, withState } from 'recompose';
import DumbMessageList from './DumbMessageList';
import { listenLastRoomMessages } from '../../../actions/chatActions';


const MessageList = compose(
  withState('messages', 'setMessages', {}),
  lifecycle({
    componentDidMount() {
      listenLastRoomMessages('room1', (messages) => this.props.setMessages(messages))
    }
  }),
  branch(
    (props) => props.messages && Object.keys(props.messages).length > 0,
    (BaseComponent) => BaseComponent,
    () => () => <p>No messages ¯\_(ツ)_/¯</p>
  )
)(DumbMessageList);

export default MessageList;
