import { useState,useRef ,useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth/AuthContext";
import { useCartContext } from "../../hooks/cart/cart-context";
import { searchHandler } from "../../hooks/search/search-controllers";
import { useProducts } from "../../hooks/useProduct";
import { useWishContext } from "../../hooks/wishList/wish-context";
import "../../styles/navbar.css"
export const Navbar = () => {
    const { authState, authDispatch } = useAuth();
    const { totalCartItemsCount } = useCartContext();
    const { wishItems } = useWishContext();
    let name = localStorage.getItem("zevnonName") || JSON.parse(localStorage?.getItem("userDetails"))?.firstName || "Guest";
    const navigate = useNavigate();
    const {search,setSearch}=useCartContext();
    const [showMenu, setShowMenu] = useState(false)
    const focusSearch = useRef("")
    useEffect(()=>{
        focusSearch.current.focus();
    },[])
    return (
        <div className="main-div">
            <header className={showMenu ? "nav-container nav" : "nav-container"}>
                <div className="header">
                    <div className="title-logo"><i className="fab fa-deezer"></i></div>
                    <div className="title">
                        <Link to="/">Zevnon</Link>
                    </div>
                    <input onChange={(e)=>setSearch(e.target.value)} onClick={()=>searchHandler(navigate)} ref={focusSearch}  type="text" className="input" placeholder="search Zevnon" />
                </div>
                <div>
                    <ul className={showMenu ? "text-links-mobile" : "text links"}>
                        <li className="items items-login">   {authState.isLoggedIn && authState.token ? <button className="logout-Button" onClick={() => authDispatch({ type: "LOGOUT" })}>Logout</button> : <Link to="/login">Login</Link>}</li>
                        <li className="items items-signup">   {authState.isLoggedIn && authState.token ? `Hi, ${name}` : <Link to="/sign-up">Sign up</Link>}</li>
                        <li className="items">
                            <div className="avatar-badge md">
                                <Link to="/wishlist">
                                    <div>
                                        <i className="fas fa-heart"></i>
                                        <div> {showMenu && "wishList"}</div>
                                        <div className="badge text">{wishItems.length}</div>
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
                                        <div className="badge text">{totalCartItemsCount}</div>
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