import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const ChatHeader = ({ currentReceiver }) => {
  return (
    <StyledChatHeader>
      {currentReceiver && <Avatar />}
      <h5>{currentReceiver?.nickname}</h5>
    </StyledChatHeader>
  );
};

const StyledChatHeader = styled.div`
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
`;

export default ChatHeader;
