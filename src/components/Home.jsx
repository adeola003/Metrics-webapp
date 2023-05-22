import React from 'react';
import Filter from './input/filter';
import Search from './input/Search';
import Countries from './Countries';

const Home = () => (
  <>
  <section className='input-container'>
    <Filter />
    <Search />
  </section>
  <section className='list-container'>
    <Countries />
  </section>
  </>
);

export default Home;
