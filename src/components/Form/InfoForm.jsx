import React from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useForm, Controller } from 'react-hook-form';

const InfoForm = ({ defaultValues, handleNext }) => {
  const [birthday, setBirthday] = React.useState(null);
  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = (formValues) => {
    if (formValues) {
      handleNext(formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction='column' spacing={2} sx={{ width: '100%' }}>
        <Controller
          name='nickname'
          control={control}
          render={({ field }) => <TextField label='Biệu hiệu' {...field} />}
        />
        <Controller
          name='email'
          control={control}
          render={({ field }) => <TextField label='Email' {...field} type='email' />}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => <TextField label='Mật khẩu' {...field} type='password' />}
        />
        <Controller
          name='confirmPassword'
          control={control}
          render={({ field }) => <TextField label='Xác nhận mật khẩu' {...field} type='password' />}
        />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Controller
            name='birthday'
            control={control}
            render={({ field }) => (
              <DatePicker
                label='Ngày sinh'
                value={birthday}
                {...field}
                renderInput={(params) => <TextField {...params} />}
              />
            )}
          />
        </LocalizationProvider>
        <Controller
          name='phone'
          control={control}
          render={({ field }) => <TextField label='Số điện thoại' {...field} />}
        />
        <Controller
          name='gender'
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel id='radio-buttons-group-label'>Giới tính</FormLabel>
              <RadioGroup
                row
                aria-labelledby='radio-buttons-group-label'
                defaultValue={defaultValues.gender}
                {...field}
              >
                <FormControlLabel value='female' control={<Radio />} label='Nữ' />
                <FormControlLabel value='male' control={<Radio />} label='Nam' />
                <FormControlLabel value='other' control={<Radio />} label='Khác' />
              </RadioGroup>
            </FormControl>
          )}
        />

        <input type='submit' />
      </Stack>
      <Button variant='contained' type='submit' sx={{ mt: 1, mr: 1 }}>
        Tiếp tục
      </Button>
      <Button disabled={true} sx={{ mt: 1, mr: 1 }}>
        Trở lại
      </Button>
    </form>
  );
};

export default InfoForm;
