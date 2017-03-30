import React from 'react';
import { branch, compose, lifecycle } from 'recompose';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import DumbActiveUserList from './DumbActiveUserList';
import { listenActiveChatRoomUsers } from '../../../actions/chatActions';

const mapStateToProps = (state) => ({ currentRoom: state.chat.currentRoom, activeUsers: state.chat.activeUsers, activeUsersLoaded: state.chat.activeUsersLoaded });
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
    }
  }),
  branch(
    (props) => props.activeUsersLoaded,
    (BaseComponent) => BaseComponent,
    () => () => <p>Loading...</p>
  ),
  branch(
    (props) => props.activeUsers && Object.keys(props.activeUsers).length > 0,
    (BaseComponent) => BaseComponent,
    () => () => <p>No connected users at the moment ¯\_(ツ)_/¯</p>
  )
)(DumbActiveUserList);

export default ActiveUserList;
