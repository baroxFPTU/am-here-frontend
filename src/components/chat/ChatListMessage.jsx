import { Box } from '@mui/material';
import ChatMessage from './ChatMessage';

const ChatListMessage = ({ messages, currentId }) => {
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
        <ChatMessage key={index} data={message} isSender={Boolean(currentId === message.sender)} />
      ))}
    </Box>
  );
};

export default ChatListMessage;
