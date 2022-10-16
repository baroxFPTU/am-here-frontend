import { Avatar, Typography } from '@mui/material';
import React from 'react';

const Contact = ({ data, onChangeSelectContact, isSelected }) => {
  return (
    <div
      className={`contact ${isSelected && 'selected'}`}
      onClick={() => onChangeSelectContact(data)}
    >
      <Avatar />
      <div className='contact_user'>
        <Typography variant='h6' sx={{ fontSize: '16px' }}>
          {data.nickname || 'User'}
        </Typography>
        <p>New message</p>
      </div>
    </div>
  );
};

export default Contact;
