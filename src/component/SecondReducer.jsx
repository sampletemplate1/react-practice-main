import React, { useReducer } from 'react';
const isAuth=false;

const reduce = (state,action) =>{
  switch(action.type){
    case 'LOGIN':
      return{isAuth:true};
    case 'LOGOUT':
      return{isAuth:false};
  }
}
function SecondReducer(){
  const[state,dispatch]=useReducer(reduce,isAuth);
  return(
    <>
    {state.isAuth?
    ( <>
      <button onClick={()=>dispatch({type:'LOGOUT'})}>Logout</button> 
      <p>Thank You</p>
      </>)
    :
    (<>
      <button onClick={()=>dispatch({type:'LOGIN'})}>LOGIN</button>
      <p>Please Login</p>
      </>)}
    </>
  )
}
export default SecondReducer;