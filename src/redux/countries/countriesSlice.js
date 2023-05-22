import { createSlice } from '@reduxjs/toolkit';
import { getCountries } from './countriesActions';

const initialState = {
  countriesData: [],
  loading: false,
  countryData: [],
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
      });
  },
});

export default countrySlice.reducer;
export const { reset } = countrySlice.actions;
