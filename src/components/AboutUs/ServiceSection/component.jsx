import { Grid } from '@mui/material';
import { SERVICES_SAMPLE } from 'app/constant';
import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceSection = () => {
  return (
    <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} alignItems='stretch'>
      {SERVICES_SAMPLE.map((service) => (
        <Grid item xs={4} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ServiceSection;
