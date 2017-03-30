import React from 'react';
import { branch, compose, lifecycle, withState } from 'recompose';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Message from '../molecules/Message';
import DumbMessageList from './DumbMessageList';
import { listenLastRoomMessages } from '../../../actions/chatActions';


const MessageList = compose(
  lifecycle({
    componentDidMount() {
      this.props.listenLastMessages('room1');
    }
  }),
  branch(
    (props) => props.messagesLoaded,
    (BaseComponent) => BaseComponent,
    () => () => <p>Loading...</p>
  ),
  branch(
    (props) => props.messages && Object.keys(props.messages).length > 0,
    (BaseComponent) => BaseComponent,
    () => () => <p>No messages ¯\_(ツ)_/¯</p>
  )
)(DumbMessageList);

const mapStateToProps = (state) => ({ messages: state.chat.messages, messagesLoaded: state.chat.messagesLoaded });
const mapDispatchToProps = (dispatch) => ({
  listenLastMessages: bindActionCreators(listenLastRoomMessages, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
