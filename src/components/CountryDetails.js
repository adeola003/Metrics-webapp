import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchByCode } from '../redux/countries/countriesSlice';

const CountryDetails = () => {
  const { loading, countryResult } = useSelector((store) => store.countries);
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    if (code) {
      console.log(code);
      dispatch(searchByCode(code.toLowerCase()));
    }
  }, [dispatch, code]);

  if (loading || countryResult.length === 0) {
    return (<h2>Content is not fetched thus not available</h2>);
  }
  return (
    <section>
      <div>
        <h1>{countryResult[0].name.official}</h1>
        <img src={countryResult[0].flags.png} alt={`Flag of ${countryResult[0].name.common}`} />
        <p>
          Capital:
          {countryResult[0].capital}
        </p>
        <p>
          <stron>Capital Info:</stron>
          <span>
            {' '}
            Latitude_
            {countryResult[0].capitalInfo.latlng[0]}
          </span>
          ;
          <span>
            {' '}
            Longitude_
            {countryResult[0].capitalInfo.latlng[1]}
          </span>
        </p>
        <p>
          Continent:
          {countryResult[0].continents[0]}
        </p>
        <p>
          Currencies:
          {Object.values(countryResult[0].currencies).map((currency) => currency.name).join(', ')}
        </p>
        <p>
          Languages:
          {Object.values(countryResult[0].languages).join(', ')}
        </p>
        <p>
          Region:
          {countryResult[0].region}
        </p>
        <p>
          Population:
          {countryResult[0].population}
        </p>
        <p>
          Timezones:
          {countryResult[0].timezones.join(', ')}
        </p>
        <div className="borders">
          <p>Country borders</p>
          {countryResult[0].borders ? (countryResult[0].borders.map((border) => (
            <Link className="broder-name" to={`/${border}`} key={border}>
              <p>{border}</p>
            </Link>
          ))
          )
            : (<span>No borders</span>)}

        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
