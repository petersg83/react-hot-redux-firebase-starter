import React from 'react';

const Message = (props) => <div>
  <p>
    {props.message.text} <br />
    {props.message.authorId} - {new Date(props.message.timestamp).toLocaleString()}
  </p>
</div>;

Message.propTypes = {
  message: React.PropTypes.object
};

export default Message;
