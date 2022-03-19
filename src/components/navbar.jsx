import { useState } from "react"
import "../styles/navbar.css"
export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="main-div">
            <header className={showMenu ? "nav-container nav" : "nav-container"}>
                <div className="header">
                    <div className="title-logo"><i className="fab fa-deezer"></i></div>
                    <div className="title">
                        <a href="/">Zevnon</a>
                    </div>
                    <input type="text" className="input" placeholder="search Zevnon" />
                </div>
                <div>
                    <ul className={showMenu ? "text-links-mobile" : "text links"}>
                        <li className="items items-login"><a href="/login">Login</a></li>
                        <li className="items items-signup"><a href="/sign-up">Sign up</a></li>
                        <li className="items">
                            <div className="avatar-badge md">
                                <a href="/wishlist">
                                    <div>
                                        <i className="fas fa-heart"></i>
                                        <div> {showMenu && "wishList"}</div>
                                        <div className="badge text">2</div>
                                    </div>
                                </a>

                            </div>
                        </li>
                        <li className="items ">
                            <div className="avatar-badge md">
                                <a href="/cart">
                                    <div>
                                        <i className="fas fa-shopping-cart"></i>
                                        {showMenu && "cart"}
                                        <div className="badge text">2</div>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li className="items-menu" onClick={() => setShowMenu(!showMenu)}>{!showMenu ? <i className="lni lni-menu"></i> : <i className="lni lni-cross-circle"></i>}</li>
                    </ul>
                </div>
            </header>

        </div>
    )
}