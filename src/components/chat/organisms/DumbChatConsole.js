import React from 'react';
import Message from '../molecules/Message';

const ChatDumbConsole = (props) => {
  return (<form onSubmit={props.submit}>
    <input
      type="text"
      placeholder="Your message..."
      value={props.text}
      onChange={(e) => props.setText(e.target.value)}
    />
    <input type="submit" value="Send"/>
  </form>);
};

ChatDumbConsole.propTypes = {
  submit: React.PropTypes.func,
  setText: React.PropTypes.func
};

export default ChatDumbConsole;
