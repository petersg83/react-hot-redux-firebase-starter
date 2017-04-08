import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatReducer(state = initialState.chat, action) {
  switch (action.type) {
    case types.CHAT_MESSAGES_LOADED_SUCCESS:
      return Object.assign({}, state, {messagesByRoom: {...state.messagesByRoom, [action.chatRoom]: action.messages || {}}, messagesLoaded: true});
    case types.CHAT_USER_JOIN_ROOM_SUCCESS:
      return Object.assign({}, state, {currentRoom: action.chatRoom});
    case types.CHAT_USER_LEAVE_ROOM_SUCCESS:
      return Object.assign({}, state, {currentRoom: null, messages: null});
    case types.CHAT_ROOMS_LOADED_SUCCESS:
      return Object.assign({}, state, {rooms: action.rooms, roomsLoaded: true});
    case types.CHAT_ACTIVE_USERS_LOADED_SUCCESS:
      return Object.assign({}, state, {activeUsersByRoom: {...state.activeUsersByRoom, [action.chatRoom]: action.activeUsers || {}}, activeUsersLoaded: true});
    default:
      return state;
  }
}
