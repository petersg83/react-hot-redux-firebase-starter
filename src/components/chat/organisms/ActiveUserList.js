import React from 'react';
import { branch, compose, lifecycle, withProps, withHandlers } from 'recompose';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import DumbActiveUserList from './DumbActiveUserList';
import { listenActiveChatRoomUsers, stopListeningActiveChatRoomUsers } from '../../../actions/chatActions';

const mapStateToProps = (state) => ({ currentRoom: state.chat.currentRoom, activeUsersByRoom: state.chat.activeUsersByRoom, activeUsersLoaded: state.chat.activeUsersLoaded });
const mapDispatchToProps = (dispatch) => ({
  listenActiveChatRoomUsers: bindActionCreators(listenActiveChatRoomUsers, dispatch)
});

const ActiveUserList = compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(
    (props) => props.currentRoom,
    (BaseComponent) => BaseComponent,
    () => () => <p>Loading...</p>
  ),
  lifecycle({
    componentDidMount() {
      this.props.listenActiveChatRoomUsers(this.props.currentRoom);
    },
    componentWillUnmount() {
      stopListeningActiveChatRoomUsers(this.props.currentRoom);
    }
  }),
  branch(
    (props) => props.activeUsersLoaded,
    (BaseComponent) => BaseComponent,
    () => () => <p>Loading...</p>
  ),
  branch(
    (props) => props.activeUsersByRoom.hasOwnProperty(props.currentRoom) && Object.keys(props.activeUsersByRoom[props.currentRoom]).length > 0,
    (BaseComponent) => BaseComponent,
    () => () => <p>No connected users at the moment ¯\_(ツ)_/¯</p>
  ),
  withProps((props) => ({activeUsers: props.activeUsersByRoom[props.currentRoom]})
  )
)(DumbActiveUserList);

export default ActiveUserList;
