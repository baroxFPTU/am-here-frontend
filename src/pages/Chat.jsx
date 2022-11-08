/* eslint-disable react-hooks/exhaustive-deps */
import { Container as MuContainer, Stack } from '@mui/material';
import axios from 'axios';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

import { baseURL } from 'app/axiosClient';
import {
  CHAT_SAMPLE,
  CONVERSATION_EXAMPLE,
  REACT_APP_API_URL,
  ROLE_LISTENER_STRING,
  ROLE_MEMBER_STRING,
} from 'app/constant';

import { selectCurrentRole, selectUser } from 'features/auth/authSlice';
import {
  chatActions,
  selectConversations,
  selectCurrentReceiver,
  selectMessages,
} from 'features/chat/chatSlice';

import ChatHeader from 'components/chat/ChatHeader';
import ChatInput from 'components/chat/ChatInput';
import ChatListMessage from 'components/chat/ChatListMessage';
import ChatStartModal from 'components/chat/ChatStartModal';
import ConversationHeader from 'components/chat/conversations/ConversationHeader';
import ConversationList from 'components/chat/conversations/ConversationList';
import { ConversationSection } from 'components/chat/conversations/styles';
import { ChatContainer, ChatWrapper } from 'components/chat/styles';
import moment from 'moment/moment';

export default function Chat() {
  const params = useParams();
  const socketRef = useRef();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const currentRole = useSelector(selectCurrentRole);
  const messages = useSelector(selectMessages);
  const selectedUser = useState(null);
  const currentReceiver = useSelector(selectCurrentReceiver);
  const [isStart, setIsStart] = useState(false);
  const conversations = useSelector(selectConversations);
  const senderId = currentUser.id;
  useEffect(() => {
    socketRef.current = socketIOClient.connect(baseURL);

    socketRef.current.emit('client-auth', {
      uid: currentUser.id,
      nickname: currentUser.nickname,
      role_data: currentRole,
      socket_id: socketRef.current.id,
    });

    socketRef.current.on('server-exchange-message', (data) => {
      dispatch(chatActions.addMessage(data));
    });

    socketRef.current.on('server-send-conversation-message', (data) => {
      dispatch(chatActions.setMessages(data));
    });

    const isTeller = currentRole.slug === ROLE_MEMBER_STRING;
    const isListener = currentRole.slug === ROLE_LISTENER_STRING;
    if (isTeller) {
      console.log('wait for update listeners');
      socketRef.current.on('server-update-online-listeners', (onlineListeners) => {
        dispatch(chatActions.setConversations(onlineListeners));
      });
    } else if (isListener) {
      socketRef.current.on('server-update-online-tellers', (onlineTellers) => {
        dispatch(chatActions.setConversations(onlineTellers));
      });
    }

    return () => {
      socketRef.current.disconnect({
        role_slug: currentRole.slug,
      });
    };
  }, []);

  const handleSendMessage = (message) => {
    const data = {
      id: uuidv4(),
      senderId: currentUser.id,
      message: message,
      createdAt: moment(Date.now()).toDate(),
    };
    socketRef.current.emit('client-send-message', data);
  };
  const handleChangeContact = (contactId) => {
    socketRef.current.emit('client-get-conversation-message', 'room-1');
    dispatch(chatActions.setCurrentReceiver(contactId));
  };

  const conversationHeader =
    currentRole.slug === ROLE_LISTENER_STRING ? 'Người kể chuyện' : 'Người lắng nghe';

  const isShowChatStartModal = !isStart && currentRole.slug === ROLE_MEMBER_STRING;
  console.log({ messages });
  return (
    <MuContainer>
      <ChatWrapper sx={{ height: '100%', py: 3, display: 'flex' }}>
        <ConversationSection>
          <ConversationHeader title={conversationHeader} />
          {<ConversationList data={conversations} onChangeContact={handleChangeContact} />}
        </ConversationSection>
        <ChatContainer>
          <ChatHeader currentReceiver={currentReceiver} />
          <ChatListMessage messages={messages} currentId={senderId} />
          {/* {isShowChatStartModal && <ChatStartModal onStart={handleStartConversation} />} */}
          <Stack justifyContent='center' alignItems='center'>
            {/* {(isStart || currentRole.slug === ROLE_LISTENER_STRING) && ( */}
            <ChatInput onSendMessage={handleSendMessage} />
            {/* )} */}
          </Stack>
        </ChatContainer>
      </ChatWrapper>
    </MuContainer>
  );
}
