import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'AdH7V12QPJx1mklUJKXi9lidOcZwu5cK3gW5SFGK';


export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/categories?api_key=${apiKey}`
    );
    return response.data.categories;
  }
);

export const fetchCategoryData = createAsyncThunk(
  'category/fetchCategoryData',
  async (category) => {
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?category=${category}&api_key=${apiKey}`
    );
    return response.data;
  }
);
