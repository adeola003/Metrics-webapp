import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchCategoryData } from "../API";

const initialState = {
    categories: [],
    categoryData: null,
    loading: false,
    error: null,
  };



const mainSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchCategories.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
          })
          .addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(fetchCategoryData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchCategoryData.fulfilled, (state, action) => {
            state.loading = false;
            state.categoryData = action.payload;
          })
          .addCase(fetchCategoryData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})

export default mainSlice.reducer;