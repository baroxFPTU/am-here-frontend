import { Box, Button } from '@mui/material';
import { useRef } from 'react';
import styled from 'styled-components';

function ChatInput({ onSendMessage }) {
  const messageRef = useRef('');

  const handleClickSendMessage = (e) => {
    e.preventDefault();
    onSendMessage(messageRef.current.value);
    messageRef.current.value = '';
  };

  return (
    <ChatInputWrapper>
      <ChatInputContainer>
        <form id='message-form' onSubmit={handleClickSendMessage} style={{ flex: 1 }}>
          <TextFieldMessage
            type='text'
            placeholder='Nội dung tin nhắn'
            size='small'
            sx={{ width: '100%' }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
            ref={messageRef}
          />
        </form>
        <Button form='message-form' onClick={handleClickSendMessage} sx={{ color: '#50a6b1' }}>
          Gửi
        </Button>
      </ChatInputContainer>
    </ChatInputWrapper>
  );
}

const ChatInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
`;

const ChatInputContainer = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 10px;

  width: 100%;
  padding: 10px 20px;
  margin-top: 28px;

  margin-bottom: 16px;
  border-radius: 12px;

  background-color: #f2f5f7;

  &::-webkit-input-placeholder {
    color: #a5acb1;
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const TextFieldMessage = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  background: transparent;
  font-size: 16px;
  font-family: inherit;
`;

export default ChatInput;
