import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth/AuthContext";
import { useCartContext } from "../../hooks/cart/cart-context";
import { useSortedProduct } from "../../hooks/Filters";
import { useWishContext } from "../../hooks/wishList/wish-context";

export const ListingProducts = () => {
    const { state, sortPriceHighLow } = useSortedProduct();
    const { addToCartHandler } = useCartContext();
    const { wishItems, addToWishList, removeFromWishList } = useWishContext();
    const { cartItems } = useCartContext();
    let inCart;
    let inWishList;
    const { authState } = useAuth()
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate("/cart")
    }
    const addToishListHandler = (product) => {
        inWishList = wishItems.some((item) => {
            if (item.id === product.id) {
                return true;
            }
            return false;
        });

        authState.isLoggedIn ? inWishList ? removeFromWishList(product) : addToWishList(product) : navigate("/")
    }
    const addToCart=(product)=>{
        authState.isLoggedIn ? addToCartHandler(product) : navigate("/login")
    }
    return (sortPriceHighLow.length === 0) ? <div className="shopping-section error-product-list">Errr... No products found. Try changing the filters</div> : <div className={`shopping-section product-listing-page ${state.filterMenu ? `filterMenu` : ``}`}>
        {sortPriceHighLow.map((product) => {
            return <div className="card" key={product.id}>
                <div className="img-div">
                    <img src={product.img} alt="product d" />
                </div>
                <div className="text-div">
                    <Link to={`/item/${product._id}`}>  <div className="header-top">{product.title.slice(0, 20)}...</div></Link>
                    <div className="header-bottom">
                        <div className="discounted price">${product.price}</div>
                        <div className="selling-price line-through">
                            ${product.price + product.discountedPrice}
                        </div>
                        <div className="product-rating"> {product.rating}★</div>
                    </div>
                    <div className="description">Buy now at {(product.discountedPrice / product.price * 100).toFixed(2)}% off. </div>
                    <ul>
                        {inCart = cartItems.some((item) => {
                            if (item.id === product.id) {
                                return true;
                            }
                            return false
                        })
                        }

                        {!inCart ? <li className="card-icons text-icon" onClick={() => addToCart(product)}><i className="fas fa-shopping-cart"></i></li> : <li className="card-icons text-icon" onClick={navigateHandler}> Cart </li>}
                       
                        {
                            inWishList = wishItems.some((item) => {
                                if (item.id === product.id) {
                                    return true;
                                }
                                return false
                            })
                        }
                        {<li className="card-icons text-icon" onClick={() => authState.isLoggedIn ? addToishListHandler(product) : navigate("/login")}>
                            <i className={inWishList ? "lni lni-heart-filled" : "lni lni-heart"}></i>
                        </li>}

                        <li className="card-icons"> <i className="lni lni-share-alt-1"></i></li>
                        <li className="card-icons"><i className="lni lni-more-alt"></i></li>
                    </ul>
                    <ul className="product-location">
                        <li className="location-success"><i className="fas fa-map-marker-alt"></i></li>
                        <li className="location-success message">Deliverable in 5 Days</li>
                    </ul>
                </div>
            </div>

        }
        )}
    </div>
}