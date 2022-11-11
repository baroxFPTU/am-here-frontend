import { Avatar } from '@mui/material';
import BackButton from 'components/common/Button/BackButton';
import { useWindowSizeChange } from 'features/common/hooks/useWindowSizeChange';
import React from 'react';
import styled from 'styled-components';

const ChatHeader = ({ receiver }) => {
  const { isMobile } = useWindowSizeChange();
  if (!receiver) return;

  return (
    <StyledChatHeader>
      {isMobile && <BackButton to='/chat' color='#333' />}
      <Avatar src={receiver.photoURL} alt={receiver.nickname} sx={{ width: 30, height: 30 }} />
      <h5>{receiver.nickname}</h5>
    </StyledChatHeader>
  );
};

const StyledChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  gap: 10px;
  background-color: #fff;
  color: #333;
  flex-shrink: 0;
  border-bottom: 1px solid #dfe8f1;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
`;

export default ChatHeader;
