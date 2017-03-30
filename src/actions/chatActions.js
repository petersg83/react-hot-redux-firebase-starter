import firebaseApi from '../api/firebase';
import * as types from './actionTypes';

import {ajaxCallError, beginAjaxCall} from './ajaxStatusActions';

export function addChatMessage(chatRoom, message) {
    return firebaseApi.databasePush(`/rooms/${chatRoom}/messages`, message);
}

export function createChatRoom(chatRoom) {
  firebaseApi.databaseUpdate(`/rooms/${chatRoom}`, {name: chatRoom});
  return firebaseApi.databasePush(`/rooms/roomsName`, {name: chatRoom});
}

export function listenChatRooms() {
  return (dispatch) => {
    return firebaseApi.listenValue(`/rooms/roomsName`, (rooms) => {
      dispatch({type: types.CHAT_ROOMS_LOADED_SUCCESS, rooms});
    });
  };
}

export function listenLastRoomMessages(chatRoom) {
  return (dispatch) => {
    return firebaseApi.listenValue(`/rooms/${chatRoom}/messages`, (messages) => {
      dispatch({type: types.CHAT_MESSAGES_LOADED_SUCCESS, messages});
    }, 10);
  };
}

export function listenActiveChatRoomUsers(chatRoom) {
  return (dispatch) => {
    return firebaseApi.listenValue(`/rooms/${chatRoom}/activeUsers`, (activeUsers) => {
      dispatch({type: types.CHAT_ACTIVE_USERS_LOADED_SUCCESS, activeUsers});
    });
  };
}

export function addUserToChatRoom(chatRoom, userId, userEmail) {
  return (dispatch) => {
    return firebaseApi.databaseSet(`/rooms/${chatRoom}/activeUsers/${userId}`, userEmail)
      .then((result) => {
        firebaseApi.removeOnDisconnect(`/rooms/${chatRoom}/activeUsers/${userId}`);
        dispatch({type: types.CHAT_USER_JOIN_ROOM_SUCCESS, chatRoom});
      })
      .catch(dispatch({type: types.CHAT_USER_JOIN_ROOM_FAILED, chatRoom}));
  };
}

export function removeUserFromChatRoom(chatRoom, userId) {
  return (dispatch) => {
     return firebaseApi.databaseRemove(`/rooms/${chatRoom}/activeUsers/${userId}`)
      .then(dispatch({type: types.CHAT_USER_LEAVE_ROOM_SUCCESS, chatRoom}))
      .catch(dispatch({type: types.CHAT_USER_LEAVE_ROOM_FAILED, chatRoom}));
  };
}
