import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://restcountries.com/v3.1/all';

export const getCountries = createAsyncThunk("countries/getList", 
async () => {
    const response = await axios.get(url);
    return response.data;
})