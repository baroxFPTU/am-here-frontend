import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ChatMessage = ({ message, isSender }) => {
  return (
    <Stack direction='row' alignItems='center' justifyContent={isSender ? 'end' : 'start'}>
      <Box>
        <Typography variant='h3' sx={{ fontSize: '15px', display: 'block', mb: 1 }}>
          {message.username}
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
          {message.text}
        </Typography>
      </Box>
    </Stack>
  );
};

export default ChatMessage;
