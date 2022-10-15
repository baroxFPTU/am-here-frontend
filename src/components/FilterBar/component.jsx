import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Stack, TextField } from '@mui/material';
import SelectField from 'components/SelectField';

const FilterBar = ({ label }) => {
  const genderOptions = [
    {
      label: 'Chon giới tính',
      value: undefined,
    },
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
      label: 'Chon kieu nguoi',
      value: undefined,
    },
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
      label: 'Chon khu vực',
      value: undefined,
    },
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
          <SelectField id='gender' label='Giới tính' options={genderOptions} />
          <SelectField id='category' label='Thể loại' options={categoryOptions} />
          <SelectField id='region' label='Khu vực' options={regionOptions} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} className='Search'>
          <TextField id='standard-basic' label='Tìm kiếm người nghe' variant='standard' />
          <Button variant='contained'>
            <SearchIcon />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default FilterBar;
