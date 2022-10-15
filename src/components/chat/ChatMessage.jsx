import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentReceiver } from 'features/chat/chatSlice';
import { selectUser } from 'features/auth/authSlice';

const ChatMessage = ({ data, isSender }) => {
  const currentReceiver = useSelector(selectCurrentReceiver);
  const user = useSelector(selectUser);
  console.log(user);
  return (
    data && (
      <Stack direction='row' alignItems='center' justifyContent={isSender ? 'end' : 'start'}>
        <Box>
          <Typography variant='h3' sx={{ fontSize: '15px', display: 'block', mb: 1 }}>
            {isSender ? user?.nickname : currentReceiver?.nickname || 'User'}
          </Typography>
          <Typography
            variant='body'
            as='div'
            sx={{
              padding: '12px 24px',
              color: isSender ? '#fff' : '#333',
              background: isSender ? '#1ea9b3' : '#ddd',
              width: '100%',
              borderRadius: 2,
            }}
          >
            {data.message}
          </Typography>
        </Box>
      </Stack>
    )
  );
};

export default ChatMessage;
