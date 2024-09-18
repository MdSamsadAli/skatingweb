import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./common/Footer";
import AboutUs from "./pages/AboutUs";
import SkatingClassPage from "./pages/Skating";
import SkatingShopPage from "./pages/Shop";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/skating" element={<SkatingClassPage />} />
          <Route path="/shop" element={<SkatingShopPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
