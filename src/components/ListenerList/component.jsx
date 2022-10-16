import { Grid, Pagination, Stack } from '@mui/material';
import ListenerCard from 'components/ListenerCard';
import React from 'react';

const ListenerList = ({ listeners }) => {
  return (
    <>
      <Grid container spacing={4}>
        {listeners.map((listener, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ListenerCard data={listener} />
          </Grid>
        ))}
      </Grid>
      <Stack direction='row' justifyContent='center'>
        <Pagination sx={{ p: 5 }} count={10} />
      </Stack>
    </>
  );
};

export default ListenerList;
