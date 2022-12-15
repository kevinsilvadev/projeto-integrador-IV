import { Fragment } from "react";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import HomeUser from "./components/pages/HomeUser";
import Keychain from "./components/pages/KeychainUser";
import AboutUs from "./components/pages/AboutUs";
import AddCompany from "./components/pages/AddCompany";
import EditUser from "./components/pages/EditUser";
import ViewBill from "./components/pages/ViewBill";
import ViewCompanyQRCode from "./components/pages/ViewCompanyQRCode";
import ViewBillQRCode from "./components/pages/ViewBillQRCode";
import  authHeader  from "./services/auth-header";
import ShowBill from "./components/pages/ShowBill";
import ShowBillQrCode from "./components/pages/ShowBillQrCode";

const Private = ({ Item }) => {
  return authHeader() ? <Item /> : <Home />;
};


const Rotas = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route exact path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route exact path="/sign-up" element={<SignUp />}>
            {" "}
          </Route>
          <Route exact path="/home-user" element={<Private Item={HomeUser} />}>
            {" "}
          </Route>
          <Route
            exact
            path="/keychain-user"
            element={<Private Item={Keychain} />}
          >
            {" "}
          </Route>
          <Route exact path="/about-us" element={<AboutUs />}>
            {" "}
          </Route>
          <Route
            exact
            path="/add-company"
            element={<Private Item={AddCompany} />}
          >
            {" "}
          </Route>
          <Route exact path="/edit-user" element={<Private Item={EditUser} />}>
            {" "}
          </Route>
          <Route exact path="/view-bill" element={<Private Item={ViewBill} />}>
            {" "}
          </Route>
          <Route exact path="/show-bill" element={<Private Item={ShowBill} />}>
            {" "}
          </Route>
          <Route exact path="/:token" element={<ViewCompanyQRCode />}>
            {" "}
          </Route>
          <Route exact path="/view-bill/qrcode" element={<ViewBillQRCode />}>
            {" "}
          </Route>
          <Route exact path="/show-bill/qrcode" element={<ShowBillQrCode />}>
            {" "}
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default Rotas;
