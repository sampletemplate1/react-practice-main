import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './conterSlice';
const store=configureStore({
    reducer:{
        counter:counterReducer,
    },
});
export default store;