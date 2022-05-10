import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/cart/cart-context";
import { useWishContext } from "../../hooks/wishList/wish-context";

export const CartProduct = () => {
    const { state, dispatch, cartItems, removeFromCartHandler, updateItemHandler, totalPrice } = useCartContext();
    const { wishItems, addToWishList, wishState, wishDispatch,removeFromWishList } = useWishContext();
    let  addToWishListMessage=false;
    return <div>
        <div className="h3">total items in cart: {state.cartCount}</div>
        {cartItems.length === 0 ? <div className="empty-message"> No products availavle in cart.</div> :

            <div className="product-summary">

                <div className="product-content">
                    {cartItems.map((items) => {

                        return <div className="card text-overlay-card no-footer" key={items.id}>
                            <div className="img-div">
                                <img src={items.img} alt={items.title} />
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
                                        <button onClick={() => items.qty <= 1 ? removeFromCartHandler(items) : updateItemHandler(items._id, "decrement")}>-</button>
                                        <li>{items.qty}</li>
                                        <button onClick={() => updateItemHandler(items._id, "increment")}>+</button>
                                    </ul>
                                </div>
                                <div className="description">{items.title}</div>

                                <ul className="cart-page-footer">
                                    <li className="h4">${items.price}</li>
                                    <li className="discounted-percentage">{(items.discountedPrice / items.price * 100).toFixed(2)}% off.</li>
                                    <li>
                                        <button className="action-button" onClick={() => removeFromCartHandler(items)}> Remove </button>
                                    </li>
                                </ul>
                                {/* Add to wish */}

                                {addToWishListMessage = wishItems.some((item) => {
                                    if (item.id === items.id) {
                                        return true;
                                    }
                                })

                                }
                                <button className="cart-wishList" onClick={addToWishListMessage?(()=>removeFromWishList(items)) : (() => addToWishList(items))}>
                                    {addToWishListMessage ? "In wishList" : "Add to wishList"}
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
                        Total : $ {totalPrice}
                    </div>

                    <div className="button outline">CheckOut</div>

                    <div>
                        Order summary
                    </div>
                    <div className="h5">
                        You save 49% on your order.
                    </div>
                    <div>
                        <div className="total-price">
                            {cartItems.map((items) => {
                                return <div key={items.id}>
                                    <div>{items.title}</div>
                                    <div>{items.qty} * ${items.price} =${items.qty * items.price}</div>
                                </div>
                            })}
                        </div>


                    </div>

                </div>
            </div>


        }
    </div>

}





