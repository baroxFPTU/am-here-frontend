import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';

const BackButtonStyled = styled(Button)`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  color: ${(props) => props.color ?? '#fff'};
  font-size: 1.5rem;
`;

const BackButton = ({ to = '/', color }) => {
  return (
    <BackButtonStyled as={Link} to={to} color={color}>
      <MdArrowBackIos />
    </BackButtonStyled>
  );
};

export default BackButton;
