import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from './calSlice';
const store= configureStore({
    reducer:{
        calculator:calculatorReducer,
    },
});
export default store;