import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatReducer(state = initialState.chat, action) {
  switch (action.type) {
    case types.CHAT_MESSAGES_LOADED_SUCCESS:
      return Object.assign({}, state, {messages: action.messages, messagesLoaded: true});
    case types.CHAT_USER_JOIN_ROOM_SUCCESS:
      return Object.assign({}, state, {currentRoom: action.chatRoom});
    case types.CHAT_USER_LEAVE_ROOM_SUCCESS:
      return Object.assign({}, state, {currentRoom: null, messages: null});
    default:
      return state;
  }
}
