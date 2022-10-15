import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { Box, Button, Container as MuContainer } from '@mui/material';
import axios from 'axios';

import Contacts from 'components/chat/Contacts';
import ChatInput from 'components/chat/ChatInput';
import ChatListMessage from 'components/chat/ChatListMessage';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'features/auth/authSlice';
import { chatActions, selectContacts, selectCurrentReceiver } from 'features/chat/chatSlice';

const host = 'http://10.1.106.147:3000';
const currentId = localStorage.getItem('userId');

export default function Chat() {
  const socket = useRef();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);
  const currentReceiver = useSelector(selectCurrentReceiver);
  const [messages, setMessages] = useState([]);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://10.1.106.147:3000/api/user');
        const filteredData = response.data.filter((contact) => contact._id !== user.id);
        const currentReceiver = filteredData[0];
        dispatch(
          chatActions.setData({
            contacts: filteredData,
            currentReceiver: filteredData[0],
          })
        );

        const conversationResponse = await axios.post(`${host}/api/message/getmsg`, {
          sender: user.id,
          receiver: currentReceiver._id,
        });
        console.log({ messages: conversationResponse.data });
        setMessages(conversationResponse.data);
      } catch (error) {
        throw new Error(error);
      }
    })();
    if (isStart) {
      socket.current = io(host);

      socket.current.emit('add-user', user.id);
      socket.current.on('msg-receive', (data) => {
        console.log({ dataReceived: data });
        pushMessageToState(data);
      });
    }
  }, [isStart, user, dispatch]);

  const handleSendMessage = (message) => {
    const data = {
      receiver: currentReceiver._id,
      sender: user.id,
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
      <Box sx={{ display: 'grid', gridTemplateColumns: '30% 1fr', flex: 1 }}>
        <Contacts contacts={contacts} />
        <ChatContainer>
          <div className='chat-header'>
            <div className='header-contact'></div>
            <h5>{currentReceiver?.nickname}</h5>
          </div>
          <ChatListMessage messages={messages} currentId={user.id} />
          {!isStart && <Button onClick={handleStartConversation}>Bắt đầu cuộc trò chuyện</Button>}
          {isStart && <ChatInput onSendMessage={handleSendMessage} />}
        </ChatContainer>
      </Box>
    </MuContainer>
  );
}

const ChatContainer = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: 60px 80vh 60px;
  .chat-header {
    height: 60px;
    display: flex;
    background-color: #cce2f5;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
    .header-contact {
      height: 45px;
      width: 45px;
      background-color: white;
      border-radius: 50px;
    }
    h5 {
      font-size: 17px;
      font-weight: 600;
    }
  }
`;
