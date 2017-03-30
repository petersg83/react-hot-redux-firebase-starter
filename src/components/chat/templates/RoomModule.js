import React from 'react';
import { compose } from 'recompose';
import DumbRoomModule from './DumbRoomModule';

const RoomModule = compose()(DumbRoomModule);

export default RoomModule;
