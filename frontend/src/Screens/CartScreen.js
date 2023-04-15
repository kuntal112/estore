import CartItem from "../components/CartItem";
import "./cartscreen.css";
import {Link}from "react-router-dom"
import {useSelector,useDispatch}from "react-redux";

import {addToCart,removeFromCart}from "../redux/actions/CartActions";


function CartScreen() {
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.Cart)
  const {cartItems}=cart;
  const qtyChangeHandler=(id,qty)=>{
        dispatch(addToCart(id,qty))
  }
  const removeItem=(id)=>{
    dispatch(removeFromCart(id))
  }
  const getCartCount=()=>{
   return cartItems.reduce((qty,item)=>parseInt(item.qty)+qty,0)
  }
  const getSubTotalPrice=()=>{
    return cartItems.reduce((price,item)=>parseInt(item.qty*item.price)+price,0)
  }
    return (
        <div className="cartscreen"> 
          <div className="cscreen_left">
            {cartItems.length === 0 ?<p><Link to="/">go Back</Link></p>:cartItems.map(item=>{
              return(
                <CartItem item={item} qtyChangeHandler={qtyChangeHandler} removeItem={removeItem}/>
              )
            })}
           
          </div>
          
          <div className="cscreen_right">
            <p className="product_price"> Subtotal({getCartCount()})items</p>
           
            <p className="product_price">$ {getSubTotalPrice().toFixed(2)}</p>
            <button className="checkoutbtn">Proceed to checkout</button>
          </div>
        </div>
    )
}

export default CartScreen
