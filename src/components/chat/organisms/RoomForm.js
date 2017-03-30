import React from 'react';
import { connect } from 'react-redux';
import Message from '../molecules/Message';
import { compose, withHandlers, withState } from 'recompose';
import DumbRoomForm from './DumbRoomForm';
import { createChatRoom } from '../../../actions/chatActions';

const RoomForm = compose(
  withState('text', 'setText', ''),
  withHandlers({
    submit: (props) => (e) => {
      createChatRoom(props.text);
      props.setText('');
      e.preventDefault();
    }
  })
)(DumbRoomForm);


export default RoomForm;
