import { Box, Stack, Typography } from '@mui/material';
import { selectUser } from 'features/auth/authSlice';
import { selectCurrentConversation } from 'features/chat/chatSlice';
import { useSelector } from 'react-redux';

const ChatMessage = ({ data, isSender }) => {
  const currentConversation = useSelector(selectCurrentConversation);
  const user = useSelector(selectUser);
  return (
    data && (
      <Stack
        direction='row'
        alignItems='center'
        justifyContent={isSender ? 'flex-end' : 'flex-start'}
        sx={{ mb: 2 }}
      >
        <Box>
          <Typography
            variant='h3'
            sx={{
              fontSize: '15px',
              display: 'block',
              mb: 1,
              textAlign: isSender ? 'right' : 'left',
            }}
          >
            {isSender ? user?.nickname : currentConversation.participants[0]?.nickname || 'User'}
          </Typography>
          <Typography
            variant='body'
            as='div'
            sx={{
              padding: '10px 20px',
              color: isSender ? '#fff' : '#333',
              background: isSender ? '#1ea9b3' : '#ddd',
              borderRadius: 2,
              fontSize: ['14px', '16px'],
            }}
          >
            {data.body}
          </Typography>
        </Box>
      </Stack>
    )
  );
};

export default ChatMessage;
