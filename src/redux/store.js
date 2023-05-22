import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    Countries: countriesReducer,
  },
});

export default store;
