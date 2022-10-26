import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const ConversationHeaderWrapper = styled(Box)`
  display: flex;
  align-items: center;
  background: #7db4bb;

  height: 60px;
`;

const ConversationHeader = ({ title }) => {
  return (
    <ConversationHeaderWrapper>
      <Typography variant='h6' sx={{ textAlign: 'center', color: '#fff', width: '100%' }}>
        {title}
      </Typography>
    </ConversationHeaderWrapper>
  );
};

export default ConversationHeader;
