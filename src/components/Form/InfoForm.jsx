import React from 'react';
import * as yup from 'yup';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormHelperText, Stack, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm, Controller } from 'react-hook-form';
import { ROLE_LISTENER_STRING, ROLE_MEMBER_STRING } from 'app/constant';

const schema = yup.object().shape({
  nickname: yup.string().min(6).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
  birthday: yup.date().required(),
  phone: yup.string().required(),
  gender: yup.string().oneOf(['female', 'male', 'others']),
  active_role: yup.string().oneOf([ROLE_LISTENER_STRING, ROLE_MEMBER_STRING]),
});

const InfoForm = ({ defaultValues, handleNext }) => {
  const [birthday, setBirthday] = React.useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
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
          render={({ field }) => (
            <TextField
              label='Biệu hiệu'
              {...field}
              error={errors['nickname']}
              helperText={errors['nickname']?.message}
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField
              label='Email'
              {...field}
              type='email'
              error={errors['email']}
              helperText={errors['email']?.message}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <TextField
              label='Mật khẩu'
              {...field}
              type='password'
              error={errors['password']}
              helperText={errors['password']?.message}
            />
          )}
        />
        <Controller
          name='confirmPassword'
          control={control}
          render={({ field }) => (
            <TextField
              label='Xác nhận mật khẩu'
              {...field}
              type='password'
              error={errors['confirmPassword']}
              helperText={errors['confirmPassword']?.message}
            />
          )}
        />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Controller
            name='birthday'
            control={control}
            render={({ field }) => (
              <DatePicker
                label='Ngày sinh'
                value={birthday}
                onChange={(newValue) => {
                  console.log(newValue);
                  setBirthday(newValue);
                }}
                {...field}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={errors['birthday']}
                    helperText={errors['birthday']?.message}
                  />
                )}
              />
            )}
          />
        </LocalizationProvider>
        <Controller
          name='phone'
          control={control}
          render={({ field }) => (
            <TextField
              label='Số điện thoại'
              {...field}
              error={errors['phone']}
              helperText={errors['phone']?.message}
            />
          )}
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

        {/* <input type='submit' /> */}
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
