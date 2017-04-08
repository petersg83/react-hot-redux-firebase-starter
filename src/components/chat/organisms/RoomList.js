import React from 'react';
import { branch, compose, lifecycle } from 'recompose';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import DumbRoomList from './DumbRoomList';
import { listenChatRooms } from '../../../actions/chatActions';

const mapStateToProps = (state) => ({ rooms: state.chat.rooms, roomsLoaded: state.chat.roomsLoaded });
const mapDispatchToProps = (dispatch) => ({
  listenChatRooms: bindActionCreators(listenChatRooms, dispatch)
});

const RoomList = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.listenChatRooms();
    }
  }),
  branch(
    (props) => props.roomsLoaded,
    (BaseComponent) => BaseComponent,
    () => () => <p>Loading... :(</p>
  ),
  branch(
    (props) => props.rooms && Object.keys(props.rooms).length > 0,
    (BaseComponent) => BaseComponent,
    () => () => <p>No rooms ¯\_(ツ)_/¯</p>
  )
)(DumbRoomList);

export default RoomList;
