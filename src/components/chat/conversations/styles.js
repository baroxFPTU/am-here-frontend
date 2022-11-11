import { Box } from '@mui/material';
import styled from 'styled-components';

export const ConversationSection = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 450px;

  background-color: #fafafa;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    width: 100%;
    border-radius: 0;
  }
`;
