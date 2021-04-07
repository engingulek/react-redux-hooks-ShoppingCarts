import {combineReducers} from "redux";
import cartListReducer from "./cartListReducer"

const reducers = combineReducers({
    cardRed:cartListReducer
})

export default reducers;
