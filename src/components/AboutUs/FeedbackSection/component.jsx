import { Grid } from '@mui/material';
import { FEEDBACKS_SAMPLE } from 'app/constant';
import React from 'react';
import FeedbackCard from './FeedbackCard';

const FeedbackSection = () => {
  return (
    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} alignItems='stretch'>
      {FEEDBACKS_SAMPLE.map((feedback) => (
        <Grid item xs={4}>
          <FeedbackCard feedback={feedback} key={feedback.id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeedbackSection;
