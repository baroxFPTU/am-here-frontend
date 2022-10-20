import { Button as MaterialButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(MaterialButton)`
  box-shadow: none !important;
`;

const Button = ({ children, href, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
