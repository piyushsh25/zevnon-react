import { useState } from "react"
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/cart/cart-context";
import { useWishContext } from "../../hooks/wishList/wish-context";

import "../../styles/navbar.css"
export const Navbar = () => {  
    const {wishState}=useWishContext();
 
    const [showMenu, setShowMenu] = useState(false)
    const {state}=useCartContext()
    return (
        <div className="main-div">
            <header className={showMenu ? "nav-container nav" : "nav-container"}>
                <div className="header">
                    <div className="title-logo"><i className="fab fa-deezer"></i></div>
                    <div className="title">
                        <Link to="/">Zevnon</Link>
                    </div>
                    <input type="text" className="input" placeholder="search Zevnon" />
                </div>
                <div>
                    <ul className={showMenu ? "text-links-mobile" : "text links"}>
                        <li className="items items-login">   <Link to="/login">Login</Link></li>
                        <li className="items items-signup">   <Link to="/sign-up">Sign up</Link></li>
                        <li className="items">
                            <div className="avatar-badge md">
                                <Link to="/wishlist">
                                    <div>
                                        <i className="fas fa-heart"></i>
                                        <div> {showMenu && "wishList"}</div>
                                        <div className="badge text">{wishState.wishCount}</div>
                                    </div>
                                </Link>

                            </div>
                        </li>
                        <li className="items ">
                            <div className="avatar-badge md">
                                <Link to="/cart">
                                    <div>
                                        <i className="fas fa-shopping-cart"></i>
                                        {showMenu && "cart"}
                                        <div className="badge text">{state.cartCount}</div>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        <li className="items-menu" onClick={() => setShowMenu(!showMenu)}>{!showMenu ? <i className="lni lni-menu"></i> : <i className="lni lni-cross-circle"></i>}</li>
                    </ul>
                </div>
            </header>

        </div>
    )
}