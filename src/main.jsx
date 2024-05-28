import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Hero from "./components/Hero.jsx";
import GameSlider from "./components/GameSlider.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";
import VerticalSlider from "./components/VerticalSlider.jsx";
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar/>
    <VerticalSlider />
    <App />
    <Hero />
    <GameSlider />
    <Body />
    <Footer />
  </React.StrictMode>
);
