import React from 'react';
import Message from '../molecules/Message';

const DumbMessageList = (props) => {
  const messages = Object.keys(props.messages).map((key, index) => <Message key={index} message={props.messages[key]} />);

  return (<div>
    {messages}
  </div>);
};

DumbMessageList.propTypes = {
  messages: React.PropTypes.object
};

export default DumbMessageList;
