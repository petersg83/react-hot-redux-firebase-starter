import React from 'react';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DumbMessage from './DumbMessage'
import { addUserToChatRoom } from '../../../actions/chatActions';

const mapStateToProps = (state) => ({ user: state.user });

const Message = compose(
  connect(mapStateToProps),
  withProps((props) => {
    return {isCurrentUser: props.user.uid === props.message.authorId}
  })
)(DumbMessage)

Message.propTypes = {
  message: React.PropTypes.object
};

export default Message;
