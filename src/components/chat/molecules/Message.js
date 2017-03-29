import React from 'react';

const Message = (props) => <div>
  <p>{props.message.author} : {props.message.text}</p>
</div>;

Message.propTypes = {
  message: React.PropTypes.object
};

export default Message;
