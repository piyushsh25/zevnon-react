import { useCartContext } from "../../hooks/cart/cart-context";
import { useSortedProduct } from "../../hooks/Filters";
import { useWishContext } from "../../hooks/wishList/wish-context";
import { wishListHandler } from "../../hooks/wishList/wishlist-controller";

export const ListingProducts = () => {
    const {state, sortPriceHighLow } = useSortedProduct();
    const { dispatch } = useCartContext();
    const { wishState, wishDispatch } = useWishContext();
    return (sortPriceHighLow.length === 0) ? <div className="shopping-section error-product-list">Errr... No products found. Try changing the filters</div> : <div className={`shopping-section product-listing-page ${state.filterMenu?`filterMenu`:``}`}>
        {sortPriceHighLow.map((product) => {
            return <div className="card" key={product.id}>
                <div className="img-div">
                    <img src={product.img} alt="product d" />
                </div>
                <div className="text-div">
                    <div className="header-top">{product.title.slice(0, 20)}...</div>
                    <div className="header-bottom">
                        <div className="discounted price">${product.price}</div>
                        <div className="selling-price line-through">
                            ${product.price + product.discountedPrice}
                        </div>
                        <div className="product-rating"> {product.rating}★</div>
                    </div>
                    <div className="description">Buy now at {(product.discountedPrice / product.price * 100).toFixed(2)}% off. </div>
                    <ul>
                        <li className="card-icons text-icon" onClick={() => dispatch({ type: "addToCartHandler", payload: product })}><i className="fas fa-shopping-cart"></i></li>
                        {<li className="card-icons text-icon" onClick={() => wishListHandler(product, wishState, wishDispatch)}>

                            {wishState.inWishlist = wishState.wishItems.some((item) => {
                                if (item.id === product.id) {
                                    return true;
                                }
                                return false
                            })
                            }

                            <i className={wishState.inWishlist ? "lni lni-heart-filled" : "lni lni-heart"}></i>
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