import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth/AuthContext"
import { useCartContext } from "../../hooks/cart/cart-context"
import { useWishContext } from "../../hooks/wishList/wish-context"
import "../../styles/ProductPage.css"
export const ProductBody = (product) => {
    // const { categoryName, discountedPrice, id, img, price, rating, size, title, _id } = product;
    const { addToWishList, wishItems, removeFromWishList } = useWishContext();
    const { setcartItems,addToCartHandler, cartItems } = useCartContext();
    const { authState } = useAuth();
    const navigate = useNavigate();
    let inWishList, inCart;
    const addToishListHandler = (product) => {
        inWishList = wishItems.some((item) => {

            if (item.id === product.id) {
                return true;
            }
            return false;
        });

        authState.isLoggedIn ? (inWishList ? removeFromWishList(product) : addToWishList(product)) : navigate("/login")
    }
    const navigateHandler = () => {
        navigate("/cart")
    }

    const addToCart = (product) => {
        authState.isLoggedIn ? addToCartHandler(product) : navigate("/login")
    }
    return <div className="product-page-body">
        <div className="product-body img">
            <img class="img-square" src={`${product.img}`} alt="" />
        </div>
        <div className="product-body content">

            <div className="product-title h4">
                {product.title}

            </div>
            <div className="product-size">
                {product.size}
            </div>
            <div className="h5 category-name">
                #{product.categoryName}
            </div>

            <div className="price-div">
                <div className="discounted price">${product.price}</div>
                <div className="selling-price line-through">
                    ${product.price + product.discountedPrice}
                </div>
            </div>
            <div className="description">Buy now at {(product.discountedPrice / product.price * 100).toFixed(2)}% off. </div>
            <div>
                {product.rating}★
            </div>
            <div className="product-action-button">
                <ul>

                    {inCart = cartItems.some((item) => {
                        if (item.id === product.id) {
                            return true;
                        }
                        return false
                    })
                    }
                    <li>
                        {!inCart ? <button className="card-icons text-icon" onClick={() => addToCart(product)}>Cart+</button> : <button className="card-icons text-icon" onClick={navigateHandler}>In Cart </button>}
                    </li>
                    {/* return   addToCartHandler(product) :  */}
                    {
                        inWishList = wishItems.some((item) => {
                            if (item.id === product.id) {
                                return true;
                            }
                            return false
                        })
                    }
                    {<li className="card-icons text-icon" onClick={() => authState.isLoggedIn ? addToishListHandler(product) : navigate("/login")}>
                        <button>{inWishList ? "In wishList" : "wishList +"}</button>
                    </li>}

                </ul>


            </div>
            <div className="delivery-check">
                <input placeholder="enter pincode" />
                <button>check</button>
            </div>
            <div>
                <ul className="product-location">
                    <li className="location-success"><i className="fas fa-map-marker-alt"></i></li>
                    <li className="location-success message">Deliverable in 5 Days</li>
                </ul>
            </div>
        </div>
    </div>
}