import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DumbRoom from './DumbRoom'
import { addUserToChatRoom } from '../../../actions/chatActions';

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  addUserToChatRoom: bindActionCreators(addUserToChatRoom, dispatch)
});

const Room = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onClick: (props) => (e) => {
       props.addUserToChatRoom(props.room.name, props.user.uid, props.user.email);
       e.preventDefault()
    }
  })
)(DumbRoom)

Room.propTypes = {
  room: React.PropTypes.object
};

export default Room;
