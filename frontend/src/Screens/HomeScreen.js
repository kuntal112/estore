import {React,useEffect }from 'react'
import {useSelector,useDispatch} from "react-redux"
import "./homescreen.css"
import { getProducts as listProducts } from '../redux/actions/ProductActions'
// Components
import Product from '../components/Product'

function HomeScreen() {

    const dispatch=useDispatch();
    const getProducts=useSelector(state=>state.getProducts);
    const {products , loading , error}=getProducts;
    useEffect(()=>{
        dispatch(listProducts())

    },[dispatch])

    return (
        <div className="homescreen">
           <h1 className="homescreen_heading">Products</h1>
           {/* <hr className="hr"></hr> */}
           <div className="product_div">
               {loading? <h2>...Loading</h2>:error?<h2>{error}</h2>:products.map(product=>{
                   return (
                       <Product details={product} key={product._id}/>
                   )
               }) }
           
           </div>
        </div>
    )
}

export default HomeScreen
