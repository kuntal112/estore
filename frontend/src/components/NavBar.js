import { Link } from "react-router-dom";
import "./navbar.css";
import {useSelector} from "react-redux";
const NavBar=({setSideToggle})=>{
    const cart=useSelector(state=>state.Cart);
    const {cartItems}=cart;
    const getCartCount=()=>{
        return cartItems.reduce((qty,item)=>parseInt(item.qty)+qty,0)
    }
    return(
        <nav className="navbar">
            {/* logo */}
            <div className="navbar_logo">
                <h3>Logo</h3>
            </div>
            {/* links */}
            <ul className="navbar_links">
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
            {/* hamburger menu*/}
            <div className="hamburger_menu" onClick={()=>setSideToggle(true)}> 
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>

    )
}
export default NavBar;