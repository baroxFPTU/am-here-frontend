import { Avatar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({ data, onChangeSelectContact, isSelected, lastMessage }) => {
  return (
    <Link to={`/chat/${data?.uid}`}>
      <div
        className={`contact ${isSelected && 'selected'}`}
        // onClick={() => onChangeSelectContact(data)}
      >
        <Avatar src={data?.photoURL} />
        <div className='contact_user'>
          <Typography variant='h6' sx={{ fontSize: '16px' }}>
            {data?.nickname || 'User'}
          </Typography>
          {lastMessage && <p>New message</p>}
        </div>
      </div>
    </Link>
  );
};

export default Contact;
