import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import LiveLocationMap from "./WorkingComponents/LiveLocationMap.jsx";
import Navbar from "./Components/ControlUtilities/Navbar/Navbar.jsx";
import Footer from "./Components/ControlUtilities/Footer/Footer.jsx";
import SignupPage from "./Authentication/SignupPage.jsx";
import LoginPage from "./Authentication/LoginPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/location" element={<LiveLocationMap />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
