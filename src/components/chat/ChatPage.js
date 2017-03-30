import React from 'react';
import { branch, compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import checkAuth from '../requireAuth';
import DumbChatPage from './DumbChatPage';
import { addUserToChatRoom, removeUserFromChatRoom } from '../../actions/chatActions';

const mapStateToProps = (state) => ({ currentRoom: state.chat.currentRoom, currentUserUID: state.auth.currentUserUID });
const mapDispatchToProps = (dispatch) => ({
  addUserToChatRoom: bindActionCreators(addUserToChatRoom, dispatch),
  removeUserFromChatRoom: bindActionCreators(removeUserFromChatRoom, dispatch)
});

const ChatPage = compose(
  checkAuth,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.addUserToChatRoom('room1', this.props.currentUserUID);
    },
    componentWillUnmount() {
      this.props.removeUserFromChatRoom('room1', this.props.currentUserUID);
    }
  })
)(DumbChatPage);


export default ChatPage;
