/* eslint-disable react-hooks/exhaustive-deps */
import { Container as MuContainer, Stack } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

import { baseURL } from 'app/axiosClient';
import { ROLE_LISTENER_STRING, ROLE_MEMBER_STRING } from 'app/constant';

import { selectCurrentRole, selectUser } from 'features/auth/authSlice';
import {
  chatActions,
  selectConversations,
  selectCurrentConversation,
  selectCurrentConversationMessages,
  selectCurrentReceiver,
  selectMessages,
} from 'features/chat/chatSlice';

import ChatHeader from 'components/chat/ChatHeader';
import ChatInput from 'components/chat/ChatInput';
import ChatListMessage from 'components/chat/ChatListMessage';
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
  const currentConversation = useSelector(selectCurrentConversation);
  const messages = useSelector(selectCurrentConversationMessages);
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
      console.log({ data, currentConversation });
      if (data.sender_id !== currentUser.id && currentConversation) {
        dispatch(chatActions.addMessage({ conversationId: data.conversation_id, data }));
      }
    });
    return () => {
      socketRef.current.disconnect({
        role_slug: currentRole.slug,
      });
    };
  }, []);

  useEffect(() => {
    const { uid } = params;
    dispatch(chatActions.startConversationAsync({ uid: currentUser.id, cw: uid }));
    dispatch(chatActions.loadConversations({ uid: currentUser.id }));
  }, []);

  useEffect(() => {
    if (currentConversation?._id) {
      socketRef.current.emit('client-join-room', currentConversation._id);
      dispatch(chatActions.loadMessageAsync({ conversationId: currentConversation._id }));
    }
  }, [currentConversation]);

  const handleSendMessage = (message) => {
    if (message.trim() === '') return;
    const data = {
      sender_id: currentUser.id,
      body: message.trim(),
      conversation_id: currentConversation._id,
    };
    socketRef.current.emit('client-send-message', data);
    dispatch(chatActions.addMessage({ conversationId: currentConversation._id, data }));
  };
  const handleChangeConversation = (conversation) => {
    // dispatch(chatActions.clearMessages(currentConversation._id));
    dispatch(chatActions.setCurrentConversation(conversation));
    dispatch(chatActions.setCurrentReceiver(conversation));
  };

  const conversationHeader =
    currentRole.slug === ROLE_LISTENER_STRING ? 'Người kể chuyện' : 'Người lắng nghe';
  // const isShowChatStartModal = !isStart && currentRole.slug === ROLE_MEMBER_STRING;
  return (
    <MuContainer>
      <ChatWrapper sx={{ height: '100%', py: 3, display: 'flex' }}>
        <ConversationSection>
          <ConversationHeader title={conversationHeader} />
          {
            <ConversationList
              data={conversations}
              onChangeConversation={handleChangeConversation}
            />
          }
        </ConversationSection>
        <ChatContainer>
          <ChatHeader currentReceiver={currentConversation} />
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
