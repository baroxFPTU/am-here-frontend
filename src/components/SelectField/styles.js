import { Select } from '@mui/material';
import styled from 'styled-components';

export const ExampleStyledComponent = styled.div`
  display: inline;
`;

export const StyledSelect = styled(Select)`
  & > .MuiSvgIcon-root {
    color: #fff !important;
  }
  & > .MuiSelect-select {
    padding: 8px !important;
  }
  &:focus {
    border-color: #fff !important;
  }
`;
