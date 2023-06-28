import { combineReducers } from "redux";
import user from "./userReducer";
import products from "./productReducer";

const RootReducer = combineReducers({
    user,
    products,
});

export default RootReducer;
