/* eslint-disable react-hooks/exhaustive-deps */
import { Container as MuContainer, Stack } from '@mui/material';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

import { baseURL } from 'app/axiosClient';
import {
  CHAT_SAMPLE,
  CONVERSATION_EXAMPLE,
  REACT_APP_API_URL,
  ROLE_LISTENER_STRING,
  ROLE_MEMBER_STRING,
} from 'app/constant';

import { selectCurrentRole, selectUser } from 'features/auth/authSlice';
import { chatActions, selectCurrentReceiver } from 'features/chat/chatSlice';

import ChatHeader from 'components/chat/ChatHeader';
import ChatInput from 'components/chat/ChatInput';
import ChatListMessage from 'components/chat/ChatListMessage';
import ChatStartModal from 'components/chat/ChatStartModal';
import ConversationHeader from 'components/chat/conversations/ConversationHeader';
import ConversationList from 'components/chat/conversations/ConversationList';
import { ConversationSection } from 'components/chat/conversations/styles';
import { ChatContainer, ChatWrapper } from 'components/chat/styles';

export default function Chat() {
  const params = useParams();
  const socket = useRef();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  // const contacts = useSelector(selectContacts);
  const currentRole = useSelector(selectCurrentRole);
  const currentReceiver = useSelector(selectCurrentReceiver);
  const [messages, setMessages] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const senderId = currentUser.id;
  const receiverId = currentReceiver?._id || params.uid;

  // useEffect(() => {
  //   socket.current = io(baseURL);
  //   socket.current.emit('add-user', senderId);
  //   socket.current.on('msg-receive', (data) => {
  //     console.log({ dataReceived: data });
  //     pushMessageToState(data);
  //   });
  //   (async () => {
  //     try {
  //       const url =
  //         currentRole === ROLE_MEMBER_STRING
  //           ? `${REACT_APP_API_URL}/conversation?senderId=${senderId}`
  //           : `${REACT_APP_API_URL}/conversation/listener?receiverId=${senderId}`;
  //       const response = await axios.get(url);
  //       const currentReceiver = params.uid || response.data[0];
  //       dispatch(
  //         chatActions.setData({
  //           contacts: response.data,
  //           currentReceiver: currentReceiver,
  //         })
  //       );

  //       const conversationResponse = await axios.post(`${REACT_APP_API_URL}/message/getmsg`, {
  //         sender: senderId,
  //         receiver: receiverId,
  //       });
  //       setMessages(conversationResponse.data);
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   })();
  // }, [isStart, currentUser, dispatch]);

  useEffect(() => {
    (async () => {
      if (currentReceiver) {
        const conversationResponse = await axios.post(`${REACT_APP_API_URL}/message/getmsg`, {
          sender: senderId,
          receiver: receiverId,
        });
        setMessages(conversationResponse.data);
      }
    })();
  }, [currentReceiver, currentUser]);

  const handleSendMessage = (message) => {
    const data = {
      receiver: receiverId,
      sender: senderId,
      message: message,
    };
    socket.current.emit('send-msg', data);
    pushMessageToState(data);
  };
  const pushMessageToState = (messageData) => {
    setMessages((prevList) => [...prevList, messageData]);
  };

  const handleStartConversation = () => {
    setIsStart(true);
  };

  const handleChangeContact = (contactId) => {
    dispatch(chatActions.setCurrentReceiver(contactId));
  };

  const conversationHeader =
    currentRole === ROLE_LISTENER_STRING ? 'Người kể chuyện' : 'Người lắng nghe';

  const isShowChatStartModal = !isStart && currentRole === ROLE_MEMBER_STRING;

  return (
    <MuContainer>
      <ChatWrapper sx={{ height: '100%', py: 3, display: 'flex' }}>
        <ConversationSection>
          <ConversationHeader title={conversationHeader} />
          <ConversationList data={CONVERSATION_EXAMPLE} onChangeContact={handleChangeContact} />
        </ConversationSection>
        <ChatContainer>
          <ChatHeader currentReceiver={currentReceiver} />
          <ChatListMessage messages={CHAT_SAMPLE} currentId={senderId} />
          {isShowChatStartModal && <ChatStartModal onStart={handleStartConversation} />}
          <Stack justifyContent='center' alignItems='center'>
            {(isStart || currentRole === ROLE_LISTENER_STRING) && (
              <ChatInput onSendMessage={handleSendMessage} />
            )}
          </Stack>
        </ChatContainer>
      </ChatWrapper>
    </MuContainer>
  );
}
