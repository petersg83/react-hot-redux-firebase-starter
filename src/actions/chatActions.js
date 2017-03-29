import firebaseApi from '../api/firebase';
import * as types from './actionTypes';

import {ajaxCallError, beginAjaxCall} from './ajaxStatusActions';

export function addChatMessage(chatRoom, message) {
    return firebaseApi.databasePush(`/rooms/${chatRoom}/messages`, message)
}
