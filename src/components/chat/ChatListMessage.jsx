import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const ChatListMessage = ({ messages, currentId }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!messages || messages.length === 0) {
    return <p>Let have a chat</p>;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: 'auto',
        px: 4,
        py: 2,
        background: '#fafafa',
        maxHeight: '100%',
        overflowY: 'auto',
      }}
    >
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          data={message}
          isSender={Boolean(currentId === message.senderId)}
        />
        // <ChatMessage key={index} data={message} isSender={message.isSender} /> // just for tét
      ))}
      <div ref={bottomRef} />
    </Box>
  );
};

export default ChatListMessage;
