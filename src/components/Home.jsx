import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const { categories } = useSelector((store) => store.category);
  return (
    <section>
      <div>Hello home</div>
    </section>
  );
};

export default Home;
