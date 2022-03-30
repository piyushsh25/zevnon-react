import { useCartContext } from "../../hooks/cart/cart-context";
import { useWishContext } from "../../hooks/wishList/wish-context"

export const WishItems = () => {
    const { wishState, wishDispatch } = useWishContext();
    const { state, dispatch } = useCartContext();
  
    return <div>
        <div className="h4">Total items: {wishState.wishCount}</div>
        <div className="wishlist-summary">
            <div className="product-content">
                {wishState.wishItems.map((items) => {
                    return <div className="card text-overlay-card no-footer">
                        <div className="img-div">
                            <img src={items.img} alt="product-img" />
                        </div>
                        <div className="text-div">
                            <div className="header-top">
                                <div>${items.price} <span className="line-through">${items.price + items.discountedPrice}</span> </div>
                            </div>
                            <div className="description">{items.title}</div>
                            <ul>
                                <li>
                                    <div type="button" >
                                        &nbsp;
                                        {wishState.addToCartMessage = state.cartItems.some((item) => {
                                            if (item.id === items.id) {
                                                return true;
                                            }
                                            return false
                                        })
                                        }
                                        <button onClick={() => dispatch({ type: "addToCartHandler", payload: items })} disabled={wishState.addToCartMessage}><i className="fas fa-cart-plus"></i>{wishState.addToCartMessage ? "In cart" : "Add"}</button>
                                        <button onClick={() => wishDispatch({ type: "remove", payload: items })}>Remove</button>
                                    </div>

                                </li>

                            </ul>
                        </div>
                    </div>
                })}

            </div>
        </div>
    </div>
}