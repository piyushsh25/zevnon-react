import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/cart/cart-context";

export const CartProduct = () => {
    const { state,dispatch } = useCartContext();

    return <div>

        {state.cartItems.length === 0 ? <div>No products availavle in cart.</div> :

            <div className="product-summary">
                <div className="product-content">
                    {state.cartItems.map((items) => {
                  
                        return <div className="card text-overlay-card no-footer" key={items.id}>
                            <div className="img-div">
                                <img src="https://engin-ui.netlify.app/documentation/landing-components/card/image.jpg" alt="product-img" />
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
                                        <button onClick={() => items.quantity <= 1 ? dispatch({type:"removeHandler",payload:items}) : dispatch({type:"decrementHandler",payload:items})}>-</button>
                                        <li>{items.quantity}</li>
                                        <button onClick={() => dispatch({type:"incrementHandler",payload:items})}>+</button>
                                    </ul>
                                </div>
                                <div className="description">{items.title}</div>

                                <ul className="cart-page-footer">
                                    <li className="h4">${items.price}</li>
                                    <li className="discounted-percentage">{(items.discountedPrice / items.price * 100).toFixed(2)}% off.</li>
                                    <li>
                                        <button class="action-button" onClick={() => dispatch({type:"removeHandler",payload:items})}> Remove </button>
                                    </li>
                                </ul>
                                <button className="cart-wishList">Move to wishList</button>
                            </div>
                        </div>
                    })}


                </div>
                <div class="price-summary">
                    <div class="price-header">
                        <div class="title-logo"><i class="fab fa-deezer"></i></div>
                        <div class="title">
                            <Link to="/">Zevnon</Link>
                        </div>
                    </div>
                    <div class="h4">
                        Total : $ {state.totalPrice}
                    </div>
                 
                    <div class="button outline">CheckOut</div>

                    <div class="">
                        Order summary
                    </div>
                    <div class="h5">
                        You save 49% on your order.
                    </div>
                    <div>
                        <div class="total-price">
                            {state.cartItems.map((items) => {
                                return <div>
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





