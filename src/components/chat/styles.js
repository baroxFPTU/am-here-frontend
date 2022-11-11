import { Box } from '@mui/material';
import styled from 'styled-components';

export const ChatWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  column-gap: 12px;

  flex: 1;
  overflow: hidden;
  height: 100%;
  padding: 24px 0;

  @media screen and (max-width: 768px) {
    position: absolute;
    inset: 0;
    z-index: 1101;
    padding: 0;
  }
`;
