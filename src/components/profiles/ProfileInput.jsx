import { InputBase } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledInputBase = styled(InputBase)`
  & .MuiInputBase-input {
    border: 1px solid #dfe8f1;
    border-radius: 10px;
    padding: 10px 12px;
  }

  & .Mui-disabled {
    color: #333;
    -webkit-text-fill-color: #333;
    border: none;
    border-radius: unset;
  }
`;

const ProfileInput = ({ ...props }) => {
  return <StyledInputBase {...props} />;
};

export default ProfileInput;
