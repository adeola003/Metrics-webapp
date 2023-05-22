import React from 'react';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../redux/countries/countriesActions';
import { reset } from '../redux/countries/countriesSlice';

const Countries = () => {
  const { countriesData, loading, success } = useSelector((store) => store.countries)
  return (
  <>
    <div className="country-element">
      <img src="" alt="" />
      <div className="content">
        <h3>Hello</h3>
        <p>
          {' '}
          Population:
          <span />
        </p>
        <p>
          Region:
          <span />
        </p>
        <p>
          Capital:
          <span />
        </p>
      </div>
    </div>
  </>
)};

export default Countries;
