import {
  FormControlLabel,
  InputBase,
  InputLabel,
  Radio,
  RadioGroup,
  Stack,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { roleApi } from 'api/roleApi';
import { ROLE_LOCAL_STORAGE_LABEL } from 'app/constant';
import React, { useEffect, useState } from 'react';
import { memo } from 'react';
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

const ProfileForm = ({ defaultValues = initialValues, isEditing }) => {
  const [selectedRoleSlug, setSelectedRoleSlug] = useState(defaultValues?.role_data?.slug || null);
  const [roles, setRoles] = useState([]);

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
  const { nickname, email, phone, birthday, role_data } = defaultValues;

  const handleChangeRole = (e, roleDataSlug) => {
    setSelectedRoleSlug(roleDataSlug);
  };

  return (
    <div>
      <ProfileFormGroup label='Biệt hiệu'>
        <ProfileInput value={nickname} disabled={isEditing} />
      </ProfileFormGroup>
      <ProfileFormGroup label='Tiểu sử'>
        <TextareaAutosize disabled={isEditing} value={email} />
      </ProfileFormGroup>
      <ProfileFormGroup label='Email'>
        <ProfileInput disabled={isEditing} value={email} />
      </ProfileFormGroup>
      <ProfileFormGroup label='Số điện thoại'>
        <ProfileInput disabled={isEditing} value={phone || UNKNOWN_VALUE} />
      </ProfileFormGroup>
      <ProfileFormGroup label='Ngày sinh'>
        <ProfileInput disabled={isEditing} value={birthday || UNKNOWN_VALUE} />
      </ProfileFormGroup>
      <ProfileFormGroup label='Vai trò'>
        <ToggleButtonGroup
          color='primary'
          value={selectedRoleSlug}
          onChange={handleChangeRole}
          exclusive
          aria-label='Vai trò'
        >
          {roles.map((role) => (
            <ToggleButton key={role._id} value={role.slug}>
              {role.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </ProfileFormGroup>
    </div>
  );
};

export default memo(ProfileForm);
