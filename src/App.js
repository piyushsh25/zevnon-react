import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage.jsx";
import { ProductListing } from "./pages/ProductListing";
import {CartPage} from "./pages/Cart-page"
import { WishList } from "./pages/wishlist";



function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/products" element={ <ProductListing/>} />
        <Route path="/cart" element={ <CartPage/>} />
        <Route path="/wishlist" element={<WishList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
