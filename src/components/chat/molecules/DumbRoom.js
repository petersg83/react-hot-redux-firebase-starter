import React from 'react';

const DumbRoom = (props) => <div>
  <button
    onClick={props.onClick}
  >
    {props.room.name }
  </button>
</div>;


DumbRoom.propTypes = {
  room: React.PropTypes.object,
  onClick: React.PropTypes.func
};

export default DumbRoom;
