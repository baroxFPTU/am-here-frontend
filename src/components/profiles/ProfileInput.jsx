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
  & .MuiInputBase-input.Mui-disabled:-internal-autofill-selected {
    appearance: none;
    background-color: #fff !important;
    color: #333 !important;
  }
`;

const ProfileInput = React.forwardRef((props, ref) => {
  const { disabled } = props;
  return (
    <StyledInputBase
      {...props}
      inputRef={ref}
      placeholder={disabled ? 'Chưa cập nhât' : ''}
      autoComplete='nope'
    />
  );
});

export default ProfileInput;
