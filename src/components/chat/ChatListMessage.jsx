import { Box } from '@mui/material';
import { ROLE_MEMBER_STRING } from 'app/constant';
import { selectUser } from 'features/auth/authSlice';
import { selectCurrentConversation } from 'features/chat/chatSlice';
import WelcomeChat from 'features/chat/components/WelcomeChat';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';

const ChatListMessage = ({ messages, currentId }) => {
  const currentUser = useSelector(selectUser);
  const currentConversation = useSelector(selectCurrentConversation);
  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView();
  }, [messages]);
  const hasNoMessage = (!messages || messages.length === 0) && !currentConversation;
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: 'auto',
        px: 4,
        pt: 2,
        background: ['#fff', '#fafafa'],
        maxHeight: '100%',
        overflowY: 'auto',
        width: '100%',
      }}
    >
      {hasNoMessage && <WelcomeChat isTeller={currentUser.role_data.slug === ROLE_MEMBER_STRING} />}
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          data={message}
          isSender={Boolean(currentUser.id === message.sender_id)}
        />
        // <ChatMessage key={index} data={message} isSender={message.isSender} /> // just for tét
      ))}
      <div ref={bottomRef} />
    </Box>
  );
};

export default ChatListMessage;
