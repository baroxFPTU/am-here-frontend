import { Grid } from '@mui/material';
import ListenerCard from 'components/ListenerCard';
import React from 'react';

const ListenerList = ({ listeners }) => {
  return (
    <Grid container spacing={4}>
      {listeners.map((listener, index) => (
        <Grid item sx={12} md={6} lg={4}>
          <ListenerCard key={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListenerList;
