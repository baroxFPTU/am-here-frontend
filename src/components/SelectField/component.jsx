import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import styled, { useTheme } from 'styled-components';

const StyledSelect = styled(Select)`
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

const usePlaceholderStyles = makeStyles((theme) => ({
  placeholder: {
    color: '#aaa',
  },
}));

const Placeholder = ({ children }) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{children}</div>;
};

const SelectField = ({ id, label, options }) => {
  const theme = useTheme();
  const [option, setOption] = React.useState(0);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOption(value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, mt: 3 }}>
      <StyledSelect
        value={option}
        displayEmpty
        onChange={(event) => setOption(event.target.value)}
        renderValue={option !== '' ? undefined : () => <Placeholder>{label}</Placeholder>}
        sx={{
          background: '#21393D',
          color: '#fff',
        }}
      >
        <MenuItem value={0}>{'- ' + label + ' -'}</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default SelectField;
