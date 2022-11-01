import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  &:hover {
    background: #e7ebf0 !important;
    box-shadow: none !important ;
  }
`;

const ChatStartModal = ({ onStart }) => {
  return (
    <StyledButton
      onClick={onStart}
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
  );
};

export default ChatStartModal;
