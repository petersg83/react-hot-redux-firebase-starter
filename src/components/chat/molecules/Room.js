import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DumbRoom from './DumbRoom'
import { addUserToChatRoom } from '../../../actions/chatActions';

const mapStateToProps = (state) => ({ currentUserUID: state.auth.currentUserUID });
const mapDispatchToProps = (dispatch) => ({
  addUserToChatRoom: bindActionCreators(addUserToChatRoom, dispatch)
});

const Room = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onClick: (props) => (e) => {
       props.addUserToChatRoom(props.room.name, props.currentUserUID);
       e.preventDefault()
    }
  })
)(DumbRoom)

Room.propTypes = {
  room: React.PropTypes.object
};

export default Room;
