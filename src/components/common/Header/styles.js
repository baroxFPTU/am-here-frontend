import { Container, Toolbar } from '@mui/material';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 100%;
  box-shadow: none;

  background: #fff;
  color: #333;
`;

export const HeaderWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled(Container)`
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-height: 56px;

  @media (min-width: 600px) {
    min-height: 64px;
  }
`;
