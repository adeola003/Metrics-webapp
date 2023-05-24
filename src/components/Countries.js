import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries, searchByRegion } from '../redux/countries/countriesSlice';

const Countries = () => {
  const { countriesData, loading, region } = useSelector((store) => store.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    if (region) {
      dispatch(searchByRegion(region));
    }
  }, [dispatch, region]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        countriesData.map((country) => (
          <Link className="country-element" key={country.cioc} to={`/${country.cioc}`}>
            <img src={country.flags.png} alt={country.flags.alt} />
            <div className="content">
              <h3>{country.name.common}</h3>
              <p>
                Population:
                <span>{country.population}</span>
              </p>
              <p>
                Region:
                <span>{country.region}</span>
              </p>
              <p>
                Capital:
                <span>{country.capital}</span>
              </p>
            </div>
          </Link>
        ))
      )}
    </>
  );
};

export default Countries;
