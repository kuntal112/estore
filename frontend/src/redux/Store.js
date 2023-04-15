import {createStore, combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools}from "redux-devtools-extension";

// reducers
import CartReducer from "./reducers/CartReducer"
import { getProductDetailReducer, getProductsReducer } from "./reducers/ProductReducers";
const reducers=combineReducers({
    Cart:CartReducer,
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailReducer
});
const middleware=[thunk]

const cartFromLocalStorage=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];
const INITIAL_STATE={
    Cart:{
        cartItems:cartFromLocalStorage
    }
}

const store=createStore(
    reducers,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

