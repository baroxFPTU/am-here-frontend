import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectField = ({ id, label, options }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id={id}>{label}</InputLabel>
      <Select labelId={id} id={id} label={label}>
        {options &&
          options.map((option, index) => (
            <MenuItem value={option.value} key={index}>
              {option.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
