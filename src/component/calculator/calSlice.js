import { createSlice } from "@reduxjs/toolkit";

const calSlice= createSlice({
    name:'calculator',
    initialState:{display:''},
    reducers:{
        addNumber:(state,action)=>{
            state.display+=action.payload;
        },
        clear:(state)=>{
            state.display='';
        },
        calculateResult:(state)=>{
            try{
                state.display=eval(state.display).toString();
            }
            catch(error){
                state.display='Error';
            }
        },
    },
})
export const {addNumber,clear,calculateResult}=calSlice.actions;
export default calSlice.reducer;


