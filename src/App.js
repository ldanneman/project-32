import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import NavBar from "./components/NavBar/NavBar";
const routes = {
  0: { path: "/", name: "Home" },
  1: { path: "/about", name: "About" },
  2: { path: "/stocks", name: "Stocks" },
};
function App() {
  const z = 1;
  const y = 2;
  return (
    <div className="App">
      <NavBar routes={routes} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="stocks" element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default App;
