import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './slice/mainSlice'

const store = configureStore({
    reducer: {
        category: categoryReducer,
    }
})