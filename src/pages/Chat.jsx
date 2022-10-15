import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { Box, Button, Container as MuContainer } from '@mui/material';

import Contacts from 'components/chat/Contacts';
import ChatInput from 'components/chat/ChatInput';
import ChatListMessage from 'components/chat/ChatListMessage';

const host = 'http://10.1.106.147:3000';
const currentId = localStorage.getItem('userId');

export default function Chat() {
  const socket = useRef();
  const [messages, setMessages] = useState([]);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (isStart) {
      socket.current = io(host);

      socket.current.emit('add-user', currentId);
      socket.current.on('msg-receive', (data) => {
        console.log({ dataReceived: data });
        pushMessageToState(data);
      });
    }
  }, [isStart]);

  const handleSendMessage = (message) => {
    const data = {
      receiver: localStorage.getItem('receiver'),
      sender: currentId,
      text: message,
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
        <Contacts />
        <ChatContainer>
          <div className='chat-header'>
            <div className='header-contact'></div>
            <h5>User name</h5>
          </div>
          <ChatListMessage messages={messages} />
          {!isStart && <Button onClick={handleStartConversation}>Bat dau cuoc tro chuyen</Button>}
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
