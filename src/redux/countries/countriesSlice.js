import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const url = 'https://restcountries.com/v3.1/all';

export const getCountries = createAsyncThunk('countries/getList',
  async () => {
    const response = await axios.get(url);
    return response.data;
  });

  export const searchByCode = createAsyncThunk('countries/searchByCode',
  async (code) => {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    return response.data;
  });

const initialState = {
  countriesData: [],
  loading: false,
  countryResult: [],
  success: false,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(getCountries.rejected, (state) => {
        state.loading = false;
        state.success = false;
      })
      .addCase(searchByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.countryResult = action.payload;
        state.success = true;
      })
      .addCase(searchByCode.rejected, (state) => {
        state.loading = false;
        state.success = false;
      })
      
      
  },
});

export const countriesReducer = countrySlice.reducer;
export default countrySlice; 
export const { reset } = countrySlice.actions;
