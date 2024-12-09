import { combineReducers,configureStore } from "redux";
import CounterSlice from "./src/component/Redux/CounterSlice";
import Reducers from "./src/component/Redux/Reducers";
const store=configureStore({
    reducer:combineReducers({
        counter:CounterSlice.reducer,
        auth:Reducers.reducer,
    }),
});
export default store;