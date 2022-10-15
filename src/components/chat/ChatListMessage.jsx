import { Box } from '@mui/material';
import ChatMessage from './ChatMessage';

const messageExample = {
  receiver: 'abc.123',
  sender: 'xyz.xyz',
  text: 'Hello',
  createdAt: Date.now(),
};

const messageExampleSender = {
  receiver: 'xyz.123',
  sender: 'abc.123',
  text: 'Hello',
  createdAt: Date.now(),
};

const ChatListMessage = ({ messages }) => {
  const currentId = 'abc.123';
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: 'auto',
        px: 4,
        py: 2,
      }}
    >
      {messages.map((message, index) => (
        <ChatMessage
          message={message}
          isSender={Boolean(localStorage.getItem('userId') === message.sender)}
        />
      ))}
    </Box>
  );
};

export default ChatListMessage;
