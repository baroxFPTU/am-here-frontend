import { Autocomplete, Button, Chip, TextField } from '@mui/material';
import React from 'react';

const SelectCategory = ({ defaultOptions, onSubmit, onBack }) => {
  const fixedOptions = [];
  const [value, setValue] = React.useState([...fixedOptions]);

  return (
    <>
      <Autocomplete
        multiple
        id='fixed-tags-demo'
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue([
            ...fixedOptions,
            ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
          ]);
        }}
        options={defaultOptions}
        getOptionLabel={(option) => option.label}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              key={index}
              label={option.label}
              {...getTagProps({ index })}
              disabled={fixedOptions.indexOf(option) !== -1}
            />
          ))
        }
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label='Fixed tag' placeholder='Chọn gì đó' />
        )}
      />
      <Button
        variant='contained'
        onClick={() => {
          onSubmit(value);
        }}
        sx={{ mt: 1, mr: 1 }}
      >
        Hoàn thành
      </Button>
      <Button onClick={onBack} sx={{ mt: 1, mr: 1 }}>
        Trở lại
      </Button>
    </>
  );
};

export default SelectCategory;
