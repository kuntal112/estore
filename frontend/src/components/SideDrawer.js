import './sidedrawer.css';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

function SideDrawer({show,setSideToggle}) {
    const cart=useSelector(state=>state.Cart);
    const {cartItems}=cart;
    const getCartCount=()=>{
        return cartItems.reduce((noOfElement,elements)=>parseInt(elements.qty)+noOfElement,0)
    }
    const sidedrawerClass=["sidedrawer"]
    if(show){
        sidedrawerClass.push("show");
    }
    return (
        <div className={sidedrawerClass.join(" ")} onClick={()=>setSideToggle(false)}>
             <ul className="sidedrawer_links">
                <li >
                <Link to="/cart" className="cart_link">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                    cart
                <span className="cart_logo_badge">{getCartCount()}</span>
                    </span>
                </Link>
                </li>
                <li>
                <Link to="/">Shop</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer
