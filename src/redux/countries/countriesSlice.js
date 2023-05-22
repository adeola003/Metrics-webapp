import { createSlice } from '@reduxjs/toolkit';
import { getCountries } from './countriesActions';

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
  extraReducers: (builder) => {
    builder
    .addCase(getCountries.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getCountries.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.booksList = action.payload;
    })
    .addCase(getCountries.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  

  },
});

export default countrySlice.reducer;
