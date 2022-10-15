import { Container } from '@mui/material';
import Banner from 'components/Banner';
import Section from 'components/Common/Section';
import FilterBar from 'components/FilterBar';
import ListenerList from 'components/ListenerList';
import React from 'react';
import FilterSideBar from 'components/FilterSideBar';

const Home = () => {
  return (
    <div>
      <Banner />
      <Section>
        <FilterSideBar />
        <Container>
          <FilterBar />
          <ListenerList listeners={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
        </Container>
      </Section>
    </div>
  );
};

export default Home;
