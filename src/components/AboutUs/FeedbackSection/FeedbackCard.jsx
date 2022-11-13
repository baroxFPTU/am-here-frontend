import { Avatar, Rating } from '@mui/material';
import * as Styled from './styles';
import React from 'react';

const FeedbackCard = ({ feedback }) => {
  return (
    <Styled.FeedbackCard>
      <div className='fb-rating'>
        <Rating name='read-only' value={feedback.rating.value} readOnly size='small' />
        <span className='fb-rating__title'>{feedback.rating.title}</span>
      </div>
      <div className='fb-content'>
        <p>{feedback.body}</p>
      </div>
      <div className='fb-owner'>
        <Avatar sx={{ width: 50, height: 50 }} />
        <div className='fb-owner__info'>
          <span className='name'>{feedback.owner.name}</span>
          <span className='role'>{feedback.owner.role}</span>
        </div>
      </div>
    </Styled.FeedbackCard>
  );
};

export default FeedbackCard;
