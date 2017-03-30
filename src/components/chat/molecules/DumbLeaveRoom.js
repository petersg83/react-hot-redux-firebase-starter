import React from 'react';

const DumbLeaveRoom = (props) => <div>
  <button
    onClick={props.onClick}
  >
    Leave...
  </button>
</div>;

DumbLeaveRoom.propTypes = {
  onClick: React.PropTypes.func
};

export default DumbLeaveRoom;
