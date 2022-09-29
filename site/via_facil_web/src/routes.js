import React from "react";

import Navbar from "./components/navBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/footer";


function Rotas() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/sign-up" element={<SignUp />}>
            {" "}
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default Rotas;
