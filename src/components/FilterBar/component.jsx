import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import SelectField from 'components/SelectField';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import * as Styled from './styles';

const FilterBar = ({ label }) => {
  const genderOptions = [
    {
      label: 'Nam',
      value: 'male',
    },
    {
      label: 'Nu',
      value: 'female',
    },
  ];

  const categoryOptions = [
    {
      label: 'Nguoi nghe',
      value: 'normal',
    },
    {
      label: 'Chuyen nghiep',
      value: 'pro',
    },
    {
      label: 'Chuyen gia',
      value: 'master',
    },
  ];

  const regionOptions = [
    {
      label: 'Ha Noi',
      value: 'hanoi',
    },
    {
      label: 'Ho Chi Minh',
      value: 'hcm',
    },
    {
      label: 'Da Nang',
      value: 'danang',
    },
  ];

  return (
    <Box>
      <Stack direction='row'>
        <SelectField id='gender' label='Gioi tinh' options={genderOptions} />
        <SelectField id='category' label='The loai' options={categoryOptions} />
        <SelectField id='region' label='Khu vuc' options={regionOptions} />
        <div className='Search'>
          <TextField id='standard-basic' label='Standard' variant='standard' />
          <Button variant='contained'>
            <SearchIcon />
          </Button>
        </div>
      </Stack>
    </Box>
  );
};

export default FilterBar;
