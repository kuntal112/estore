import { Link } from "react-router-dom"
import "./cartitem.css"

function CartItem({item,qtyChangeHandler,removeItem}) {
    return (
        <div className="cartitem">
            <div className="cartitem_image">
                <img src={item.imageUrl}></img>
            </div>
            
              <Link to={`/product/${item.product}`} >
              <p className="product_name">{item.name}</p>
              </Link> 
                <p className="product_price">$ {item.price}</p>
                <select className="product_quantity" value={item.qty} onChange={(e)=>qtyChangeHandler(item.product,e.target.value)}>
                   { [...Array(item.countInStock).keys()].map(x=>{
                       return <option value={x+1}>{x+1}</option>
                   })}
                    
                    {/* <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option> */}
                </select>
                <button className="cartitem_delete_btn" onClick={()=>removeItem(item.product)}>delete</button>
            
        </div>
    )
}

export default CartItem
