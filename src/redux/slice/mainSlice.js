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
    extraReducers: {}
})