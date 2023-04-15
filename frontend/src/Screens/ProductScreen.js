import "./productscreen.css"
import {useEffect,useState} from "react"
import {useSelector,useDispatch} from "react-redux"
// Actions
import {getProductDetails} from "../redux/actions/ProductActions"
import {addToCart} from "../redux/actions/CartActions"
function ProductScreen({match,history}) {
    const [qty,setQty]=useState(1)
    const dispatch=useDispatch();
    const ProductDetails=useSelector(state=>state.getProductDetails);
    const {loading,product,error}=ProductDetails;
    useEffect(()=>{
        if(product && match.params.id !== product._id){
            dispatch(getProductDetails(match.params.id))
        }
    },[dispatch,match,history])
    const addToCartHandler=()=>{
        dispatch(addToCart(product._id,qty));
        history.push("/cart")
    }
    return (
        <div className="productscreen">
            {loading ? <h2>loading...</h2>:error?<h2>{error}</h2>:(
                <>
                      <div className="pscreen_left">
                <div className="pscreen_left_img">
                    <img src={product.imageUrl} alt="" />
                </div>
                <div className="pscreen_left_info">
                    <p className="product_name">{product.name}</p>
                    <p className="product_price">Price: {product.price}</p>
                    <p className="product_description">{product.description}</p>
                </div>
            </div>
            <div className="pscreen_right">
                <div className="pscreen_right_info">
                    <p className="product_price">Price: {product.price}</p>
                    <p className="product_status">Status:{product.countInStock>0? <span>InStock</span> :<span>outOfStock</span>}</p>
                    <p className="product_quantity">
                        Qty: 
                        <select name="QtyInStock" onChange={(e)=>setQty(e.target.value)} >
                            {
                                [...Array(product.countInStock).keys()].map(nos=>{
                                    return  <option value={nos+1} key={nos}>{nos+1}</option>
                                })
                            }
                        </select>
                    </p>
                    <button 
                    className="addToCartbtn" 
                    onClick={addToCartHandler}
                    >Add To Cart</button>
                </div>
            </div>

                </>
            )}
          
          
        </div>
    )
}

export default ProductScreen
