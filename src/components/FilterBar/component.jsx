import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Stack, TextField } from '@mui/material';
import SelectField from 'components/SelectField';

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
      <Stack direction='row' justifyContent='space-between'>
        <Box className='FilterFields'>
          <SelectField id='gender' label='Gioi tinh' options={genderOptions} />
          <SelectField id='category' label='The loai' options={categoryOptions} />
          <SelectField id='region' label='Khu vuc' options={regionOptions} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} className='Search'>
          <TextField id='standard-basic' label='Tim kiem nguoi nghe' variant='standard' />
          <Button variant='contained'>
            <SearchIcon />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default FilterBar;
