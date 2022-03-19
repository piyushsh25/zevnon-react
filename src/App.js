import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";


import { HomePage } from "./pages/HomePage/HomePage";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
