import React from 'react';
import { branch, compose, lifecycle, withState } from 'recompose';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Message from '../molecules/Message';
import DumbMessageList from './DumbMessageList';
import { listenLastRoomMessages } from '../../../actions/chatActions';


const mapStateToProps = (state) => ({ currentRoom: state.chat.currentRoom, messages: state.chat.messages, messagesLoaded: state.chat.messagesLoaded });
const mapDispatchToProps = (dispatch) => ({
  listenLastMessages: bindActionCreators(listenLastRoomMessages, dispatch)
});

const MessageList = compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(
    (props) => props.currentRoom,
    (BaseComponent) => BaseComponent,
    () => () => <p>Loading...</p>
  ),
  lifecycle({
    componentDidMount(nextProps) {
      console.log('currentRoom:', this.props.currentRoom);
      this.props.listenLastMessages(this.props.currentRoom);
    },
  }),
  branch(
    (props) => props.messagesLoaded,
    (BaseComponent) => BaseComponent,
    () => () => <p>Loading...</p>
  ),
  branch(
    (props) => props.messages && Object.keys(props.messages).length > 0,
    (BaseComponent) => BaseComponent,
    () => () => <p>No messages ¯\_(ツ)_/¯</p>
  ),
)(DumbMessageList);

export default MessageList;
