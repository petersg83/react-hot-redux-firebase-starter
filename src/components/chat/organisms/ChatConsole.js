import React from 'react';
import { connect } from 'react-redux';
import Message from '../molecules/Message';
import { branch, compose, lifecycle, withHandlers, withProps, withState } from 'recompose';
import DumbChatConsole from './DumbChatConsole';
import { addChatMessage } from '../../../actions/chatActions';

const ChatConsole = compose(
  withState('text', 'setText', ''),
  withProps((props) => {
    console.log('props :', props)
    return {}
  }),
  withHandlers({
    submit: (props) => (e) => {
      addChatMessage('room1', {authorId: props.auth.currentUserUID, text: props.text, timestamp: new Date().getTime()})
      props.setText('');
      e.preventDefault();
    }
  })
)(DumbChatConsole);

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(ChatConsole);
