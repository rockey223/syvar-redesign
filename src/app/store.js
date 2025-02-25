import contactReducer from "@/utils/contactSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        contact: contactReducer
    }
})