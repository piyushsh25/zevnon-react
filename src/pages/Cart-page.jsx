
import { Navbar } from "../components"
import { useCartContext } from "../hooks/cart/cart-context"
import "../styles/cart-page.css"
export const CartPage = () => {
    const { cartItems } = useCartContext();
    return <div>
        <Navbar />
        <div>

            {cartItems.length === 0 ? <div>No products availavle in cart.</div> :

                <div className="product-summary">
                    <div className="product-content">
                        {cartItems.map((items) => {
                            console.log(items)
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
                                            <button>-</button>
                                            <li>{items.quantity}</li>
                                            <button>+</button>
                                        </ul>
                                    </div>
                                    <div className="description">{items.title}</div>

                                    <ul className="cart-page-footer">
                                        <li className="h4">${items.price}</li>
                                        <li> 
                                        <div class="button outline"> Remove </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        })}

                    </div>
                </div>


            }
        </div>
    </div>
}