import { Link } from "react-router-dom"
import "./product.css"

function Product({details}) {
    return (
        <div className="product">
            <img src={details.imageUrl} alt={details.name}/>
            <p className="product_name">{details.name}</p>
            <p className="product_info">{details.description}</p>
            <p className="product_price">$ {details.price}</p>
            <Link to={`/product/${details._id}`} className="view_btn">View</Link>
        </div>
    )
}

export default Product
