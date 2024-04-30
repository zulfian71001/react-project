import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productList/productsReducer";
import authReducer from "./features/auth/authReducer";

export const store = configureStore({
    reducer:{
        products:productsReducer,
        auth:authReducer
    }
})