import { useState } from "react"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth/AuthContext";
import { useCartContext } from "../../hooks/cart/cart-context";
import { useWishContext } from "../../hooks/wishList/wish-context";

import "../../styles/navbar.css"
export const Navbar = () => {
    const { wishState } = useWishContext();
    const { authState, authDispatch } = useAuth();
    const [showMenu, setShowMenu] = useState(false)
    const { state } = useCartContext();
    let name = localStorage.getItem("zevnonName") || JSON.parse(localStorage?.getItem("userDetails"))?.firstName || "Guest";

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
                        <li className="items items-login">   {authState.isLoggedIn ? <button className="logout-Button" onClick={() => authDispatch({ type: "LOGOUT" })}>Logout</button> : <Link to="/login">Login</Link>}</li>
                        <li className="items items-signup">   {authState.isLoggedIn ? `Hi, ${name}` : <Link to="/sign-up">Sign up</Link>}</li>
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