import { Button as MaterialButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(MaterialButton)`
  box-shadow: none !important;
  &.MuiButton-contained {
    background: hsl(184, 72%, 41%);
    &:hover {
      background: hsl(184, 72%, 30%);
    }
  }
`;

const Button = ({ children, href, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
