import { Box, Button, Input, TextField } from '@mui/material';
import { useRef } from 'react';
import { FaRegSmileBeam } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import styled from 'styled-components';

function ChatInput({ onSendMessage }) {
  const messageRef = useRef('');

  const handleClickSendMessage = (e) => {
    e.preventDefault();
    onSendMessage(messageRef.current.value);
    messageRef.current.value = '';
  };

  return (
    <Container>
      <Box
        className='button-container'
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Button className='emoji' sx={{ width: 50, height: 50 }}>
          <FaRegSmileBeam />
          {/* {showEmojiPicker && <Picker onEmojiClick={handEmojiClick} />} */}
        </Button>
      </Box>
      <form className='input-container' onSubmit={handleClickSendMessage}>
        <TextField
          type='text'
          variant='outlined'
          placeholder='Nội dung tin nhắn'
          size='small'
          sx={{ width: '100%' }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          inputRef={messageRef}
        />
        <Button
          variant='contained'
          onClick={handleClickSendMessage}
          sx={{
            boxShadow: 'none',
            background: '#50a6b1',
          }}
        >
          Gửi
        </Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  display: grid;
  grid-template-columns: 10% 1fr;
  align-items: center;
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #50a6b1;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;
export default ChatInput;
