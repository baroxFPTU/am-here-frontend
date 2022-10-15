import React from 'react';
import { Stack, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const InfoForm = () => {
  const [birthday, setBirthday] = React.useState(null);
  return (
    <form>
      <Stack direction='column' spacing={2} sx={{ width: '100%' }}>
        <TextField label='Biệu hiệu' id='nickname' />
        <TextField label='Email' id='email' type='email' />
        <TextField label='Mật khẩu' id='password' type='password' />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label='Ngày sinh'
            value={birthday}
            onChange={(newValue) => {
              setBirthday(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField label='Số điện thoại' />
        <FormControl>
          <FormLabel id='radio-buttons-group-label'>Giới tính</FormLabel>
          <RadioGroup
            row
            aria-labelledby='radio-buttons-group-label'
            defaultValue='Nữ'
            name='radio-buttons-group'
          >
            <FormControlLabel value='female' control={<Radio />} label='Nữ' />
            <FormControlLabel value='male' control={<Radio />} label='Nam' />
            <FormControlLabel value='other' control={<Radio />} label='Khác' />
          </RadioGroup>
        </FormControl>
      </Stack>
    </form>
  );
};

export default InfoForm;
