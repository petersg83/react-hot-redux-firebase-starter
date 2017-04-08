import React from 'react';
import { connect } from 'react-redux';
import Message from '../molecules/Message';
import { compose, withHandlers, withState } from 'recompose';
import DumbRoomForm from './DumbRoomForm';
import { createChatRoom } from '../../../actions/chatActions';



const RoomForm = compose(
  withState('text', 'setText', ''),
  withState('disabled', 'setDisabled', true),
  withHandlers({
    onChange: (props) => (e) => {
      if (e.target.value.trim().length > 0) {
        props.setDisabled(false);
      } else {
        props.setDisabled(true);
      }
      props.setText(e.target.value);
    },
    submit: (props) => (e) => {
      if (props.text.trim().length > 0) {
        createChatRoom(props.text.trim());
        props.setText('');
        props.setDisabled(true);
      }
      e.preventDefault();
    }
  })
)(DumbRoomForm);


export default RoomForm;
