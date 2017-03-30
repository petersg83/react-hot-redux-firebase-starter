import React from 'react';
import Message from '../molecules/Message';

const DumbChatConsole = (props) => {
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

DumbChatConsole.propTypes = {
  submit: React.PropTypes.func,
  setText: React.PropTypes.func
};

export default DumbChatConsole;
