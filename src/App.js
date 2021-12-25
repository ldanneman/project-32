import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Stocks from "./pages/Stocks";
import { Home, Stocks, About, Settings } from "pages";
import NavBar from "./components/NavBar/NavBar";
import { routes } from "./data/routes";

function App() {
  return (
    <div className="App">
      <NavBar routes={routes} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
