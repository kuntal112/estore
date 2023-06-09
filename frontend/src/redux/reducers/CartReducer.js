import * as actionTypes from "../constants/CartConstants";
const cartReducer=(state={cartItems:[]},action)=>{

        switch(action.type){
            case actionTypes.ADD_TO_CART:
                const item=action.payload;
                const existItem=state.cartItems.find(x=>x.product===item.product);
                if(existItem){
                    return{
                        ...state,
                        cartItems:state.cartItems.map(x=>x.product===existItem.product?item:x)
                    }
                }else{
                    return{
                        ...state,
                        cartItems:[...state.cartItems,item]
                    }
                }
            case actionTypes.REMOVE_FROM_CART:
                let product_id=action.payload;
                return{
                    ...state,
                    cartItems:state.cartItems.filter(x=>x.product!==product_id)
                }
            default : return state;

        }
}
export default cartReducer;