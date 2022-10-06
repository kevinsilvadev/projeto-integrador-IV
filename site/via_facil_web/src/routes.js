import React from "react";

import Navbar from "./components/navBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Footer from "./components/footer";
import SignUp from "./components/pages/SignUp";
import HomeUser from "./components/pages/HomeUser";


function Rotas() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/sign-up" element={<SignUp />}>
            {" "}
          </Route>
          <Route path="/home-user" element={<HomeUser />}>
            {" "}
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default Rotas;
