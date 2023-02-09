import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Stocks, About, Settings, Pets, Math } from "@/pages";
import NavBar from "@/components/NavBar/NavBar";
import { routes, homeRoute } from "@/data/routes";
import AppContext from "@/context/appContext";
import Button from "@/components/Button/Button";
import Auth from "@/components/Auth/Auth";
import useModal from "@/hooks/useModal";
import Error404 from "@/pages/Errors/Error404";

function App() {
  const [user, setUser] = useState(false);
  const [Modal, openModal, closeModal] = useModal();

  const signIn = () => {
    user ? setUser(!user) : openModal();
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ user, setUser }}>
        <div style={{ display: "flex" }}>
          <NavBar routes={user ? routes : homeRoute} style={{ flex: 25 }} />
          <div
            style={{
              backgroundColor: "#0a1929",
              paddingRight: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button onClick={signIn} style={{ flex: 1 }}>
              {user ? "Logout" : "Login/Signup"}
            </Button>
          </div>
        </div>

        {user ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="stocks" element={<Stocks />} />
            <Route path="pets" element={<Pets />} />
            <Route path="math" element={<Math />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        )}
        <Modal>
          <Auth closeModal={closeModal} />
        </Modal>
      </AppContext.Provider>
    </div>
  );
}

export default App;
