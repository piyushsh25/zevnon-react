import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { HomePage } from "./pages/HomePage.jsx";
import { ProductListing } from "./pages/ProductListing";




function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <HomePage/>} />
        <Route exact path="/products" element={ <ProductListing/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
