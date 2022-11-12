/* eslint-disable react-hooks/exhaustive-deps */
import { Container as MuContainer, Stack } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

import { baseURL } from 'app/axiosClient';
import { ROLE_LISTENER_STRING } from 'app/constant';

import { selectCurrentRole, selectUser } from 'features/auth/authSlice';
import {
  chatActions,
  selectConversations,
  selectCurrentConversation,
  selectCurrentConversationMessages,
  selectCurrentReceiver,
} from 'features/chat/chatSlice';

import ChatHeader from 'components/chat/ChatHeader';
import ChatInput from 'components/chat/ChatInput';
import ChatListMessage from 'components/chat/ChatListMessage';
import ConversationHeader from 'components/chat/conversations/ConversationHeader';
import ConversationList from 'components/chat/conversations/ConversationList';
import { ConversationSection } from 'components/chat/conversations/styles';
import { ChatWrapper } from 'components/chat/styles';
import ChatContainer from 'components/container/ChatContainer';
import { selectIsLoading } from 'features/common/commonSlice';
import { useWindowSizeChange } from 'features/common/hooks/useWindowSizeChange';

export default function Chat() {
  const params = useParams();
  const socketRef = useRef();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const currentRole = useSelector(selectCurrentRole);
  const isLoading = useSelector(selectIsLoading);
  const currentConversation = useSelector(selectCurrentConversation);
  const currentReceiver = useSelector(selectCurrentReceiver);
  const messages = useSelector(selectCurrentConversationMessages);
  const conversations = useSelector(selectConversations);
  const { isMobile } = useWindowSizeChange();
  const navigate = useNavigate();

  const [isShowChat, setIsShowChat] = useState(() => {
    return isMobile && currentConversation;
  });

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
      if (data.sender_id !== currentUser.id) {
        dispatch(chatActions.addMessage({ conversationId: data.conversation_id, data }));
      }
    });

    return () => {
      socketRef.current.disconnect({
        role_slug: currentRole.slug,
      });
    };
  }, []);

  /**
   * Load all conversations on first load.
   */
  useEffect(() => {
    dispatch(chatActions.loadConversations({ uid: currentUser.id }));

    return () => {
      console.log('no more in chat so hide chat message');
      setIsShowChat(false);
      dispatch(chatActions.setCurrentConversation(null));
    };
  }, []);

  /**
   * Check whether have selected conversation or not.
   * If selected conversation not have in list => create new one.
   */
  useEffect(() => {
    const selectedConversation = conversations.find((conversation) =>
      conversation.participants.find((participant) => participant?.uid === params?.uid)
    );

    if (!selectedConversation) {
      if (params.uid) {
        console.log('start load conversation');
        dispatch(chatActions.startConversationAsync({ uid: currentUser.id, cw: params.uid }));
      }
      if (isMobile) {
        console.log('on mobile and not have conversation chat message. Hide chat');
        setIsShowChat(false);
      }
      dispatch(chatActions.setCurrentConversation(null));
      return;
    }
    dispatch(chatActions.setCurrentConversation(selectedConversation));
    // if (isMobile) setIsShowChat(true);
  }, [params.uid]);

  useEffect(() => {
    if (!currentConversation) return;
    socketRef.current.emit('client-join-room', currentConversation?._id);
    dispatch(chatActions.loadMessageAsync({ conversationId: currentConversation?._id }));
    if (currentConversation) {
      console.log('has conversation so show chat message');
      setIsShowChat(true);
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
    dispatch(chatActions.addMessage({ conversationId: data.conversation_id, data }));
  };

  const conversationHeader =
    currentRole.slug === ROLE_LISTENER_STRING ? 'Người kể chuyện' : 'Người lắng nghe';

  const isShowConversationHeaderOnMobile = isShowChat && isMobile;
  console.log({ isShowChat, isMobile });
  return (
    <MuContainer>
      <ChatWrapper>
        {!isShowConversationHeaderOnMobile && (
          <ConversationSection>
            <ConversationHeader title={conversationHeader} />
            {<ConversationList data={conversations} />}
          </ConversationSection>
        )}
        <ChatContainer isVisible={isShowChat}>
          <ChatHeader receiver={currentReceiver} />
          <ChatListMessage messages={messages} currentId={senderId} />
          <Stack justifyContent='center' alignItems='center'>
            {currentConversation && <ChatInput onSendMessage={handleSendMessage} />}
          </Stack>
        </ChatContainer>
      </ChatWrapper>
    </MuContainer>
  );
}
