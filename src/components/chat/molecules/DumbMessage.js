import React from 'react';

const DumbMessage = (props) => <div className={props.isCurrentUser ? 'message my-message' : 'message'}>
    {props.message.text} <br />
    <div className='messageInfo'>{props.message.author} - {new Date(props.message.timestamp).toLocaleString()}</div>
</div>;

DumbMessage.propTypes = {
  message: React.PropTypes.object
};

export default DumbMessage;
