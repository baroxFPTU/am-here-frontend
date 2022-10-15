import Banner from 'components/Banner';
import Section from 'components/Common/Section';
import ListenerList from 'components/ListenerList';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner />
      <Section>
        <ListenerList listeners={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      </Section>
    </div>
  );
};

export default Home;
