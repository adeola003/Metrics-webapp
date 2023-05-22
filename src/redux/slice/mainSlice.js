import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countriesList: [],
  loading: false,
  error: null,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default countrySlice.reducer;
