import { Box } from '@mui/material';
import styled from 'styled-components';

export const ChatWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  column-gap: 12px;

  flex: 1;
  overflow: hidden;
`;

export const ChatContainer = styled(Box)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
