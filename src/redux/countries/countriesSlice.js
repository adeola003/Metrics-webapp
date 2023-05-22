import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countriesData: [],
  loading: false,
  error: null,
  countryData,
  success: false,
  message: ""
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = ""
    }
  },
  extraReducers: {},
});

export default countrySlice.reducer;
