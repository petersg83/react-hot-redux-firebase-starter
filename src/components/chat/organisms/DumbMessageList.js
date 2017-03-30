import React from 'react';
import Message from '../molecules/Message';

const DumbMessageList = (props) => {
  const messages = Object.keys(props.messages).map((key, index) => (
    <div key={index}>
      <Message message={props.messages[key]} />
    </div>
  ));

  return (<div className='messageList'>
    {messages}
  </div>);
};

DumbMessageList.propTypes = {
  messages: React.PropTypes.object
};

export default DumbMessageList;
