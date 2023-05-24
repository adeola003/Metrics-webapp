import React from 'react';
import Filter from './input/Filter';
import Countries from './Countries';
import world from '../assets/world-map.jpg';

const Home = () => (
  <>
    <section className="input-container">
      <Filter />
      <a href="../assets/world-map.jpg"><img className="world-map" src={world} alt="World Map" /></a>
    </section>
    <section className="country-container">
      <h3 className="ctry-cont-title">Countries list</h3>
      <Countries />
    </section>
  </>
);

export default Home;
