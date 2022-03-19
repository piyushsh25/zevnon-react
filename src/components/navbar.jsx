import { useState } from "react"
import { Link } from "react-router-dom";
import "../styles/navbar.css"
export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
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
                        <li className="items items-login">   <Link to="/">Login</Link></li>
                        <li className="items items-signup">   <Link to="/">Sign up</Link></li>
                        <li className="items">
                            <div className="avatar-badge md">
                                <Link to="/">
                                    <div>
                                        <i className="fas fa-heart"></i>
                                        <div> {showMenu && "wishList"}</div>
                                        <div className="badge text">2</div>
                                    </div>
                                </Link>

                            </div>
                        </li>
                        <li className="items ">
                            <div className="avatar-badge md">
                                <Link to="/">
                                    <div>
                                        <i className="fas fa-shopping-cart"></i>
                                        {showMenu && "cart"}
                                        <div className="badge text">2</div>
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