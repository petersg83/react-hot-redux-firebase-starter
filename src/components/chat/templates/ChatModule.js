import React from 'react';
import { compose } from 'recompose';
import DumbChatModule from './DumbChatModule';

const ChatModule = compose()(DumbChatModule);

export default ChatModule;
