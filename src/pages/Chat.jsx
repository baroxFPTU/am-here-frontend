import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { Avatar, Box, Button, Container as MuContainer, Stack } from '@mui/material';
import axios from 'axios';

import Contacts from 'components/chat/Contacts';
import ChatInput from 'components/chat/ChatInput';
import ChatListMessage from 'components/chat/ChatListMessage';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentRole, selectUser } from 'features/auth/authSlice';
import { chatActions, selectContacts, selectCurrentReceiver } from 'features/chat/chatSlice';
import { ROLE_LISTENER_STRING, ROLE_MEMBER_STRING } from 'app/constant';
import { useParams } from 'react-router-dom';

const host = 'http://10.1.106.147:3000';

const StyledButton = styled(Button)`
  &:hover {
    background: #e7ebf0 !important;
    box-shadow: none !important ;
  }
`;

export default function Chat() {
  const params = useParams();
  const socket = useRef();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const contacts = useSelector(selectContacts);
  const currentRole = useSelector(selectCurrentRole);
  const currentReceiver = useSelector(selectCurrentReceiver);
  const [messages, setMessages] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const senderId = currentUser.id;
  const receiverId = currentReceiver?._id || params.uid;
  console.log(currentRole);
  useEffect(() => {
    (async () => {
      try {
        const url =
          currentRole === ROLE_MEMBER_STRING
            ? `http://10.1.106.147:3000/api/conversation?senderId=${senderId}`
            : `http://10.1.106.147:3000/api/conversation/listener?receiverId=${senderId}`;
        const response = await axios.get(url);
        const currentReceiver = params.uid || response.data[0];
        dispatch(
          chatActions.setData({
            contacts: response.data,
            currentReceiver: currentReceiver,
          })
        );

        const conversationResponse = await axios.post(`${host}/api/message/getmsg`, {
          sender: senderId,
          receiver: receiverId,
        });
        setMessages(conversationResponse.data);
      } catch (error) {
        throw new Error(error);
      }
    })();
    socket.current = io(host);
    socket.current.emit('add-user', senderId);
    socket.current.on('msg-receive', (data) => {
      console.log({ dataReceived: data });
      pushMessageToState(data);
    });
  }, [isStart, currentUser, dispatch]);

  useEffect(() => {
    (async () => {
      if (currentReceiver) {
        const conversationResponse = await axios.post(`${host}/api/message/getmsg`, {
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

  return (
    <MuContainer>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 1fr',
          flex: 1,
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          overflow: 'hidden',
          marginTop: 5,
        }}
      >
        <Contacts contacts={contacts} />
        <ChatContainer>
          <div className='chat-header'>
            <Avatar />
            <h5>{currentReceiver?.nickname}</h5>
          </div>
          <ChatListMessage messages={messages} currentId={senderId} />
          {!isStart && currentRole === ROLE_MEMBER_STRING && (
            <StyledButton
              onClick={handleStartConversation}
              variant='contained'
              size='large'
              sx={{
                background: '#fff',
                color: '#333',
                margin: '10px',
                boxShadow: 'none',
                border: '1px solid #e7ebf0',
              }}
            >
              Bắt đầu cuộc trò chuyện
            </StyledButton>
          )}
          <Stack justifyContent='center' alignItems='center'>
            {(isStart || currentRole === ROLE_LISTENER_STRING) && (
              <ChatInput onSendMessage={handleSendMessage} />
            )}
          </Stack>
        </ChatContainer>
      </Box>
    </MuContainer>
  );
}

const ChatContainer = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: 60px 74vh 70px;
  .chat-header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    gap: 10px;
    background-color: #7db4bb;
    color: #fff;
    h5 {
      font-size: 17px;
      font-weight: 600;
    }
  }
`;
