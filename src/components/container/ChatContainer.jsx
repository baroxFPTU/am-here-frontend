import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const ChatContainerStyled = styled(Box)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

const ChatContainer = ({ isVisible, children }) => {
  return isVisible && <ChatContainerStyled>{children}</ChatContainerStyled>;
};

export default ChatContainer;
