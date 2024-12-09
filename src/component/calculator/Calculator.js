import { useDispatch, useSelector } from "react-redux"
import { addNumber, calculateResult, clear } from "./calSlice";
import "./calc.css"

const Calculator=()=>{
    const dispatch=useDispatch();
    const display=useSelector((state)=>state.calculator.display);
    const handleButtonClick=(value)=>{
        if(value==='='){
            dispatch(calculateResult());
        }
        else if(value==='C'){
            dispatch(clear());
        }
        else{
            dispatch(addNumber(value));
        }
    };
    return(
        <>
        <div>
            <input type="text" value={display} readOnly/>

            <div className="calculator-buttons">
                {['7','8','9','4','5','6','1','2','3','-','0','C','*','+','='].map((button)=>(
                    <button key ={button} onClick={()=>handleButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
        </>
    )
}
export default Calculator;