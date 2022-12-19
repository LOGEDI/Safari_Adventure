import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import Safari from "./pages/Safari.jsx";
import Camp from "./pages/Camp.jsx";
import Experience from "./pages/Experience.jsx";
import TravelPlan from "./pages/TravelPlan.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Maasai from "./pages/Experience/Maasai.jsx";
import Sundowners from "./pages/Experience/Sundowners.jsx";
import BalloonSafari from "./pages/Experience/BalloonSafari.jsx";
import PhotoSafari from "./pages/Experience/PhotoSafari.jsx";
import Eat from "./pages/Camp/Eat.jsx";
import Sleep from "./pages/Camp/Sleep.jsx";
import Relax from "./pages/Camp/Relax.jsx";
import OtherServices from "./pages/Camp/OtherServices.jsx";
import CommunityProjects from "./pages/AboutUs/CommunityProjects.jsx";
import PhotoGallery from "./pages/AboutUs/PhotoGallery.jsx";
import Packages from "./pages/TravelPlaning/Packages.jsx";
import PackagesDetails from "./pages/TravelPlaning/PackagesDetails.jsx";
import Contact from "./pages/Contact.jsx";
import Signup from "./pages/LoginPages/signup";
import Login from "./pages/LoginPages/login";
import Private from "./pages/LoginPages/private";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Safari />} path="/Safari" />

            <Route element={<Camp />} path="/Camp" />
            <Route element={<Eat />} path="/Eat" />
            <Route element={<Sleep />} path="/Sleep" />
            <Route element={<Relax />} path="/Relax" />
            <Route element={<OtherServices />} path="/OtherServices" />

            <Route element={<Experience />} path="/Experience" />
            <Route element={<Maasai />} path="/Maasai" />
            <Route element={<Sundowners />} path="/Sundowners" />
            <Route element={<BalloonSafari />} path="/BalloonSafari" />
            <Route element={<PhotoSafari />} path="/PhotoSafari" />

            <Route element={<AboutUs />} path="/AboutUs" />
            <Route element={<CommunityProjects />} path="/CommunityProjects" />
            <Route element={<PhotoGallery />} path="/PhotoGallery" />

            <Route element={<TravelPlan />} path="/TravelPlan" />
            <Route element={<Packages />} path="/Packages" />
            <Route element={<PackagesDetails />} path="/PackagesDetails/:id" />

            <Route element={<Contact />} path="/Contact" />

            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Private />} path="/private" />

            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
