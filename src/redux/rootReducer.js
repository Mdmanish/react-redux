import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { iceCreamReducer } from "./icecream/iceCreamReducer";

const rootReducer = combineReducers({
    cakeReducer,
    iceCreamReducer
})

export default rootReducer;
