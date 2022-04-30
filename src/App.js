import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage.jsx";
import { ProductListing } from "./pages/ProductListing";
import {CartPage} from "./pages/Cart-page"
import { WishList } from "./pages/wishlist";
import { SignUp } from "./pages/Sign-up";
import { Login } from "./pages/Login";



function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/products" element={ <ProductListing/>} />
        <Route path="/cart" element={ <CartPage/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<div>Error</div>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
