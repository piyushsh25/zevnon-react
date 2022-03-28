import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage.jsx";
import { ProductListing } from "./pages/ProductListing";
import {CartPage} from "./pages/Cart-page"



function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <HomePage/>} />
        <Route exact path="/products" element={ <ProductListing/>} />
        <Route exact path="/cart" element={ <CartPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
