import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/cart/cart-context";
import { useWishContext } from "../../hooks/wishList/wish-context";

export const CartProduct = () => {
    const { state, dispatch } = useCartContext();
    const { wishState, wishDispatch } = useWishContext();
    let {addToishListMessage}=useWishContext();
    return <div>
        <div className="h3">total items in cart: {state.cartCount}</div>
        {state.cartItems.length === 0 ? <div className="empty-message"> No products availavle in cart.</div> :

            <div className="product-summary">

                <div className="product-content">
                    {state.cartItems.map((items) => {

                        return <div className="card text-overlay-card no-footer" key={items.id}>
                            <div className="img-div">
                                <img src={items.img} alt="product-img" />
                            </div>
                            <div className="text-div">
                                <div className="header-top">
                                    <div>
                                        ${items.price}
                                        <span className="line-through">
                                            ${items.price + items.discountedPrice}</span>
                                    </div>
                                </div>
                                <div className="header-bottom">
                                    <ul className="increase-decrease">
                                        <button onClick={() => items.quantity <= 1 ? dispatch({ type: "removeHandler", payload: items }) : dispatch({ type: "decrementHandler", payload: items })}>-</button>
                                        <li>{items.quantity}</li>
                                        <button onClick={() => dispatch({ type: "incrementHandler", payload: items })}>+</button>
                                    </ul>
                                </div>
                                <div className="description">{items.title}</div>

                                <ul className="cart-page-footer">
                                    <li className="h4">${items.price}</li>
                                    <li className="discounted-percentage">{(items.discountedPrice / items.price * 100).toFixed(2)}% off.</li>
                                    <li>
                                        <button className="action-button" onClick={() => dispatch({ type: "removeHandler", payload: items })}> Remove </button>
                                    </li>
                                </ul>
                                <button className="cart-wishList" onClick={
                                    (() => wishDispatch({ type: "wishlist", payload: items }))
                                }>
                                    {/* Add to wish */}
                                       
                                    {addToishListMessage=wishState.wishItems.some((item) => {
                                        if (item.id === items.id) {
                                            return true;
                                        }
                                    })
                               
                                    }
                                   {addToishListMessage?"In wishList":"Add to wishList"}
                                </button>
                            </div>
                        </div>
                    })}


                </div>
                <div className="price-summary">
                    <div className="price-header">
                        <div className="title-logo"><i className="fab fa-deezer"></i></div>
                        <div className="title">
                            <Link to="/">Zevnon</Link>
                        </div>
                    </div>
                    <div className="h4">
                        Total : $ {state.totalPrice}
                    </div>

                    <div className="button outline">CheckOut</div>

                    <div className="">
                        Order summary
                    </div>
                    <div className="h5">
                        You save 49% on your order.
                    </div>
                    <div>
                        <div className="total-price">
                            {state.cartItems.map((items) => {
                                return <div key={items.id}>
                                    <div>{items.title}</div>
                                    <div>{items.quantity} * ${items.price} =${items.quantity * items.price}</div>
                                </div>
                            })}
                        </div>


                    </div>

                </div>
            </div>


        }
    </div>

}





