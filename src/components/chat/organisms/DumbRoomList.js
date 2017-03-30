import React from 'react'
import Room from '../molecules/Room'

const DumbRoomList = (props) => {
  const rooms = Object.keys(props.rooms).map((key, index) => (
    <div key={index}>
      <Room room={props.rooms[key]} />
    </div>
  ));

  return <div>
    {rooms}
  </div>
}

export default DumbRoomList
