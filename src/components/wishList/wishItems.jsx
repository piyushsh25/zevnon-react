import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/cart/cart-context";
import { useWishContext } from "../../hooks/wishList/wish-context"

export const WishItems = () => {
    const { wishItems, removeFromWishList } = useWishContext();
    const { cartItems, addToCartHandler } = useCartContext();
    let addToCartMessage = false;
    return <div>
        <div className="h4 total-wishlist-items">Total items: {wishItems.length}</div>
        {wishItems.length === 0 ? <div className="empty-message"> No products availavle in wishlist.</div> :
            <div className="wishlist-summary">
                <div className="product-content">
                    {wishItems.map((items) => {
                        return <div className="card text-overlay-card no-footer" key={items.id}>
                            <div className="img-div">
                                <img src={items.img} alt="product-img" />
                            </div>
                            <div className="text-div">
                                <div className="header-top">
                                    <div>${items.price} <span className="line-through">${items.price + items.discountedPrice}</span> </div>
                                </div>
                                <Link to={`/item/${items._id}`} className="description">{items.title}</Link>
                                <ul>
                                    <li>
                                        <div type="button" >
                                            &nbsp;
                                            {addToCartMessage = cartItems.some((item) => {
                                                if (item.id === items.id) {
                                                    return true;
                                                }
                                                return false
                                            })
                                            }
                                            <button onClick={() => addToCartHandler(items)} disabled={addToCartMessage}><i className="fas fa-cart-plus"></i>{addToCartMessage ? "In cart" : "Add"}</button>
                                            <button onClick={() => removeFromWishList(items)}>Remove</button>
                                        </div>

                                    </li>

                                </ul>
                            </div>
                        </div>
                    })}

                </div>
            </div>}
    </div>
}