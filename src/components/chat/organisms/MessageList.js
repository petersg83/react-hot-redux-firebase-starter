import React from 'react';
import { branch, compose, lifecycle, withProps, withHandlers } from 'recompose';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Message from '../molecules/Message';
import DumbMessageList from './DumbMessageList';
import { listenLastRoomMessages, stopListeningLastRoomMessages } from '../../../actions/chatActions';


const mapStateToProps = (state) => ({ currentRoom: state.chat.currentRoom, messagesByRoom: state.chat.messagesByRoom, messagesLoaded: state.chat.messagesLoaded });
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
    componentDidMount() {
      this.props.listenLastMessages(this.props.currentRoom);
    },
    componentWillUnmount() {
      stopListeningLastRoomMessages(this.props.currentRoom);
    }
  }),
  branch(
    (props) => props.messagesLoaded,
    (BaseComponent) => BaseComponent,
    () => () => <p>Loading...</p>
  ),
  branch(
    (props) => props.messagesByRoom.hasOwnProperty(props.currentRoom) && Object.keys(props.messagesByRoom[props.currentRoom]).length > 0,
    (BaseComponent) => BaseComponent,
    () => () => <p>No messages ¯\_(ツ)_/¯</p>
  ),
  withProps((props) => ({messages: props.messagesByRoom[props.currentRoom]}))
)(DumbMessageList);

export default MessageList;
