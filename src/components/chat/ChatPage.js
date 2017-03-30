import React from 'react';
import { branch, compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import checkAuth from '../requireAuth';
import DumbChatPage from './DumbChatPage';
import { addUserToChatRoom, removeUserFromChatRoom } from '../../actions/chatActions';

const mapStateToProps = (state) => ({ currentRoom: state.chat.currentRoom, currentUserUID: state.auth.currentUserUID });

const ChatPage = compose(
  checkAuth,
  connect(mapStateToProps)
)(DumbChatPage);


export default ChatPage;
