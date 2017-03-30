import React from 'react';
import Message from '../molecules/Message';

const DumbRoomForm = (props) => {
  return (<form onSubmit={props.submit}>
    <input
      type="text"
      placeholder="New room..."
      value={props.text}
      onChange={(e) => props.setText(e.target.value)}
    />
    <input type="submit" value="Send"/>
  </form>);
};

DumbRoomForm.propTypes = {
  submit: React.PropTypes.func,
  setText: React.PropTypes.func
};

export default DumbRoomForm;
