import React from 'react';
import { connect } from 'react-redux';
import Message from '../molecules/Message';
import { branch, compose, lifecycle, withHandlers, withState } from 'recompose';
import DumbChatConsole from './DumbChatConsole';
import { addChatMessage } from '../../../actions/chatActions';

const ChatConsole = compose(
  withState('text', 'setText', ''),
  withHandlers({
    submit: (props) => (e) => {
      addChatMessage('room1', {author: 'Pierre', text: props.text})
      props.setText('');
      e.preventDefault();
    }
  })
)(DumbChatConsole);

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(ChatConsole);
