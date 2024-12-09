import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer, useState } from 'react'
const initial=0;
const reducer = (state,action) =>{
  if(action=="INC"){
    return state+1;
  }
  if(action=="DEC"){
    return state-1;
  }
}
export default function Counter() {
   const [state,dispatch]=useReducer(reducer,initial);
    // const increase = () =>{
    //     setData(data+1);
    // }
    // const decrease = () =>{
    //     setData(data-1);
    // }
  return (
    <div className="container text-center">
     <h1 className='p-2'>Counter Program</h1>
       <p> Click + button to Increment the value</p>
        <p>Click - button to Decrement the value</p>
        {/* <button className='btn btn-primary m-3' onClick={increase}>+</button><br/>
        <div>{data}</div>
        <button className='btn btn-primary m-3' onClick={decrease}>-</button> */}
         
{state}
        <button onClick={() => dispatch(type="INC")}>inc</button>
        <button onClick={() => dispatch(type="DEC")}>dec</button>

    </div>
  )
}
