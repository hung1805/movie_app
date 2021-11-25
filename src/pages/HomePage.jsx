import React from 'react';
import Banner from '../components/Banner/index';
import CardList from '../components/CardList';

const HomePage = (props) => {
  return (
    <div className='mb-12'>
      <Banner />
      <CardList type='top-rating' />
      <CardList type='treding-movie' />
      <CardList type='upcoming-movie' />
    </div>
  );
};

export default HomePage;
