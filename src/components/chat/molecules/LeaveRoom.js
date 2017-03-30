import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DumbLeaveRoom from './DumbLeaveRoom'
import { removeUserFromChatRoom } from '../../../actions/chatActions';

const mapStateToProps = (state) => ({ currentRoom: state.chat.currentRoom, currentUserUID: state.auth.currentUserUID });
const mapDispatchToProps = (dispatch) => ({
  removeUserFromChatRoom: bindActionCreators(removeUserFromChatRoom, dispatch)
});

const LeaveRoom = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onClick: (props) => (e) => {
       props.removeUserFromChatRoom(props.currentRoom, props.currentUserUID);
       e.preventDefault()
    }
  })
)(DumbLeaveRoom)

export default LeaveRoom;
