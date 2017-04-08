import React from 'react';
import Message from '../molecules/Message';

const DumbRoomForm = (props) => {
  return (<form onSubmit={props.submit}>
    <input
      type="text"
      placeholder="New room..."
      value={props.text}
      onChange={props.onChange}
    />
    <input type="submit" value="Send" disabled={props.disabled} className={props.disabled && "button-disabled"}/>
  </form>);
};

DumbRoomForm.propTypes = {
  submit: React.PropTypes.func,
  setText: React.PropTypes.func
};

export default DumbRoomForm;
