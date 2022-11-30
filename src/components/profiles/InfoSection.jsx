import { Avatar, Box, Typography } from '@mui/material';
import React, { memo } from 'react';
import styled from 'styled-components';

const InfoSection = ({ user }) => {
  return (
    <InfoSectionStyled component='section'>
      <Avatar src={user.photoURL || 'null'} alt={user?.nickname} sx={{ width: 150, height: 150 }} />
      <Typography variant='h2' sx={{ fontSize: '2rem', fontWeight: 500, color: '#333' }}>
        {user?.nickname ?? 'Anonymous'}
      </Typography>
      <Typography variant='body'>{user?.role_data?.name ?? 'Người dùng'}</Typography>
    </InfoSectionStyled>
  );
};

const InfoSectionStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  margin-bottom: 32px;
`;

export default memo(InfoSection);
