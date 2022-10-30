import React from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import HomeUser from "./components/pages/HomeUser";
import Keychain from "./components/pages/KeychainUser";
import AboutUs from "./components/pages/AboutUs";
import AddCompany from "./components/pages/AddCompany";
import EditUser from "./components/pages/EditUser";


function Rotas() {
  return (
    <>
      <Router>
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
          <Route path="/keychain-user" element={<Keychain />}>
            {" "}
          </Route>
          <Route path="/about-us" element={<AboutUs />}>
            {" "}
          </Route>
          <Route path="/add-company" element={<AddCompany />}>
            {" "}
          </Route>
          <Route path="/edit-user" element={<EditUser />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Rotas;
