import { Box, Stack, Typography } from '@mui/material';
import { selectUser } from 'features/auth/authSlice';
import { selectCurrentConversation } from 'features/chat/chatSlice';
import { useSelector } from 'react-redux';

const ChatMessage = ({ message, isOwn }) => {
  const currentConversation = useSelector(selectCurrentConversation);
  const user = useSelector(selectUser);
  const placement = isOwn ? 'right' : 'left';
  const placements = {
    right: {
      justify_content: 'flex-end',
      text_align: 'right',
      nickname: user?.nickname,
      msg_color: '#fff',
      msg_bg: '#1ea9b3',
    },
    left: {
      justifyContent: 'flex-start',
      text_align: 'left',
      nickname: currentConversation.participants[0]?.nickname,
      msg_color: '#333',
      msg_bg: '#ddd',
    },
  };

  return (
    message && (
      <Stack
        direction='row'
        alignItems='center'
        justifyContent={placements[placement].justify_content}
        sx={{ mb: 2 }}
      >
        <Box>
          <Typography
            variant='h3'
            sx={{
              fontSize: '15px',
              display: 'block',
              mb: 1,
              textAlign: placements[placement].text_align,
            }}
          ></Typography>
          <Typography
            variant='body'
            as='div'
            sx={{
              padding: '10px 20px',
              color: placements[placement].msg_color,
              background: placements[placement].msg_bg,
              borderRadius: 2,
              fontSize: ['14px', '16px'],
            }}
          >
            {message.body}
          </Typography>
        </Box>
      </Stack>
    )
  );
};

export default ChatMessage;
