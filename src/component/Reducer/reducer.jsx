const initial=0;
const reducer=(state,action)=>{
    if(action==="INC"){
        return state+1;
    }
    if(action==="DEC"){
        return state-1;
    }
}
export {initial,reducer};