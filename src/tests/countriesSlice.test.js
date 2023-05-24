import { configureStore } from '@reduxjs/toolkit';
import countryReducer, { getCountries, searchByCode, searchByRegion } from '../redux/countries/countriesSlice';

describe('Redux Country Reducer', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        countries: countryReducer,
      },
    });
  });

  it('should fetch countries successfully', async () => {
    await store.dispatch(getCountries());
    const { countriesData, success } = store.getState().countries;
    expect(countriesData.length).toBeGreaterThan(0);
    expect(success).toBe(true);
  });

  it('should search country by code successfully', async () => {
    const code = 'US';
    await store.dispatch(searchByCode(code));
    const { countryResult, success } = store.getState().countries;
    expect(countryResult.length).toBeGreaterThan(0);
    expect(success).toBe(true);
  });

  it('should search countries by region successfully', async () => {
    const region = 'Europe';
    await store.dispatch(searchByRegion(region));
    const { countriesData, success } = store.getState().countries;
    expect(countriesData.length).toBeGreaterThan(0);
    expect(success).toBe(true);
  });
});
