import React from 'react';
import { compose } from 'recompose';
import checkAuth from '../requireAuth';
import DumbChatPage from './DumbChatPage';

const ChatPage = compose()(DumbChatPage);

export default checkAuth(ChatPage);
