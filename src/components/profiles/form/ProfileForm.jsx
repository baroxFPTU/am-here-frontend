import { TextareaAutosize, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { roleApi } from 'api/roleApi';
import { ROLE_LOCAL_STORAGE_LABEL } from 'app/constant';
import { memo, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ProfileInput from '../ProfileInput';
import ProfileFormGroup from './ProfileFormGroup';

const initialValues = {
  nickname: '',
  phone: '',
  birthday: '',
  email: '',
  role_data: '',
};

const UNKNOWN_VALUE = 'Chưa cập nhật';

const ProfileForm = ({ defaultValues = initialValues, isEditing, onSubmit }) => {
  const [roles, setRoles] = useState([]);
  const { register, control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    const rolesLocal = JSON.parse(localStorage.getItem(ROLE_LOCAL_STORAGE_LABEL));
    if (!defaultValues) return;
    if (!rolesLocal) {
      roleApi.findAll().then((res) => {
        const roles = res.data;
        setRoles(roles);
        localStorage.setItem(ROLE_LOCAL_STORAGE_LABEL, JSON.stringify(roles));
      });
    } else {
      setRoles(rolesLocal);
    }
  }, [defaultValues]);

  if (!defaultValues) return;

  return (
    <form onSubmit={handleSubmit(onSubmit)} id='profile-form' autoComplete='off'>
      <ProfileFormGroup label='Biệt hiệu'>
        <ProfileInput disabled={isEditing} {...register('nickname')} />
      </ProfileFormGroup>
      <ProfileFormGroup label='Tiểu sử'>
        <TextareaAutosize
          disabled={isEditing}
          {...register('bio')}
          placeholder={isEditing ? UNKNOWN_VALUE : ''}
        />
      </ProfileFormGroup>
      <ProfileFormGroup label='Email'>
        <ProfileInput disabled={isEditing} {...register('email')} />
      </ProfileFormGroup>
      <ProfileFormGroup label='Số điện thoại'>
        <ProfileInput disabled={isEditing} {...register('phone')} />
      </ProfileFormGroup>
      <ProfileFormGroup label='Ngày sinh'>
        <ProfileInput disabled={isEditing} {...register('birthday')} />
      </ProfileFormGroup>
      <ProfileFormGroup label='Vai trò'>
        <Controller
          name='role_data.slug'
          control={control}
          render={({ field }) => (
            <ToggleButtonGroup color='primary' exclusive aria-label='Vai trò' {...field}>
              {roles.map((role) => (
                <ToggleButton key={role._id} value={role.slug}>
                  {role.name}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          )}
        />
      </ProfileFormGroup>
    </form>
  );
};

export default memo(ProfileForm);
