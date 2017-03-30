import firebaseApi from '../api/firebase';
import * as types from './actionTypes';

import {ajaxCallError, beginAjaxCall} from './ajaxStatusActions';

export function addChatMessage(chatRoom, message) {
    return firebaseApi.databasePush(`/rooms/${chatRoom}/messages`, message)
}

export function listenLastRoomMessages(chatRoom) {
  return (dispatch) => {
    firebaseApi.listenValue(`/rooms/${chatRoom}/messages`, (messages) => {
      dispatch({type: types.CHAT_MESSAGES_LOADED_SUCCESS, messages})
    }, 10);
  }
}
