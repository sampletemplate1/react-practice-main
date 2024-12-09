import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./conterSlice";

const Counter=()=>{
    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    return(
        <>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        </>
    )
}
export default Counter;