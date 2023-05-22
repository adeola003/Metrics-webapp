import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './slice/mainSlice';

const store = configureStore({
  reducer: {
    Countries: countriesReducer,
  },
});

export default store;
