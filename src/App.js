import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Feature from "./pages/Feature";
import Pricing from "./pages/Pricing";

import "normalize.css";
import "./sass/style.sass";
import "./sass/adaptive.sass";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
