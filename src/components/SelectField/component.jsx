import { FormControl, MenuItem } from '@mui/material';
import { SelectStyle } from 'components/FilterSideBar/styles';
import React from 'react';
import SelectFieldPlaceHolder from './SelectFieldPlaceHolder';
import { StyledSelect } from './styles';

const SelectField = ({ id, label, options }) => {
  const [option, setOption] = React.useState(0);

  return (
    <FormControl sx={{ m: 1, minWidth: 120, mt: 3 }}>
      <StyledSelect
        value={option}
        displayEmpty
        onChange={(event) => setOption(event.target.value)}
        renderValue={
          option !== '' ? undefined : () => <SelectFieldPlaceHolder>{label}</SelectFieldPlaceHolder>
        }
        sx={SelectStyle}
      >
        <MenuItem value={0}>{label}</MenuItem>
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
