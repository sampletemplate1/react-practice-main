import React, { useReducer } from 'react'
import {reducer,initial} from './Reducer/reducer';
import { type } from '@testing-library/user-event/dist/type';
export default function CounterReducer() {
    const [state,dispatch]=useReducer(reducer,initial);
  return (
    <div className='text-center'> 
        <button className='btn btn-primary m-2' onClick={()=>dispatch(type="DEC")}>Dec</button><br/>
        {state}  <br/>
        <button className='btn btn-primary m-2' onClick={()=>dispatch(type="INC")}>Inc</button>
    </div>
  )
}