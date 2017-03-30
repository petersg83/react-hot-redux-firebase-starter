import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatReducer(state = initialState.chat, action) {
  switch (action.type) {
    case types.CHAT_MESSAGES_LOADED_SUCCESS:
      return Object.assign({}, state, {messages: action.messages, messagesLoaded: true});
    default:
      return state;
  }
}
