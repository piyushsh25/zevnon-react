import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage.jsx";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <HomePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
