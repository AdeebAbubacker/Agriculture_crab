import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Subfiles/Home";
import About from "./Subfiles/About";
import Products from "./Subfiles/Products";
import Contactus from "./Subfiles/Contactus";
import Events from "./Subfiles/Events";
import Farmingtip from "./Subfiles/Farmingtip";
import Marketprice from "./Subfiles/Marketprice";
import News from "./Subfiles/News";
import Weather from "./Subfiles/Weatherforecast";
import emblem from "./asset/emblem.png";
import homelogo1 from "./asset/homelogo1.png";
import homelogo2 from "./asset/homelogo2.png";
import homelogo3 from "./asset/homelogo3.png";
import homelogo4 from "./asset/homelogo4.png";
import indianflag from "./asset/indian-flag.png";

import azadika from "./asset/azadika.png";
import mahatma from "./asset/mahatma.png";

const Myhomeapp = () => {
  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: "60px"
      }}>
        <div className="d-flex align-items-center">
          <img src={emblem} width="70px" height="100px" style={{ margin: "10px" }} />
          <span>Department of Agriculture & Farmers Welfare</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginRight: "2%" }}>
          <img src={indianflag} width="100px" height="60px" />
          <img src={azadika} width="100px" height="60px" />
          <img src={mahatma} width="100px" height="70px" />
          <img src={homelogo4} width="100px" height="60px" />
          <img src={homelogo1} width="100px" height="60px" />
          <img src={homelogo2} width="100px" height="60px" />
          <img src={homelogo3} width="100px" height="60px" />
        </div>
      </div>

      {/* Navigation section */}
      <div>
        <Router basename="/agriculture_crab">
          <div>
            <nav className="navbar navbar-expand-lg bg-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav" style={{ backgroundColor: "#d4d0d4" }}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/agriculture_crab/agriculture_crab" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/About" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link
 to="/Products" className="nav-link">Products/Services</Link>
 </li>
 <li className="nav-item">
   <Link to="/Contactus" className="nav-link">Contact Us</Link>
 </li>
 <li className="nav-item">
   <Link to="/Events" className="nav-link">Events</Link>
 </li>
 <li className="nav-item">
   <Link to="/Farmingtip" className="nav-link">Farmingtip</Link>
 </li>
 <li className="nav-item">
   <Link to="/Marketprice" className="nav-link">Marketprice</Link>
 </li>
 <li className="nav-item">
   <Link to="/News" className="nav-link">News</Link>
 </li>
 <li className="nav-item">
   <Link to="/Weather" className="nav-link">Weather</Link>
 </li>
</ul>
</div>
</nav>

<Routes>
<Route path="/agriculture_crab/agriculture_crab" element={<Home />} />
<Route path="/About" element={<About />} />
<Route path="/Products" element={<Products />} />
<Route path="/Contactus" element={<Contactus />} />
<Route path="/Events" element={<Events />} />
<Route path="/Farmingtip" element={<Farmingtip />} />
<Route path="/Marketprice" element={<Marketprice />} />
<Route path="/News" element={<News />} />
<Route path="/Weather" element={<Weather />} />
</Routes>
</div>
</Router>
</div>

<footer style={{ backgroundColor: "black", minHeight: "100px", bottom: "0", color: "#b7b3b3" }}>
<div style={{ display: "flex", justifyContent: "space-between", padding: "1% 4%" }}>
<div style={{}}>
<h5 style={{ textAlign: "left" }}>Contact Us:</h5>
<p style={{ textAlign: "left" }}>Phone: +91-9809675830</p>
<p style={{ textAlign: "left" }}>Email: info@agricultureindia.com</p>
<p style={{ textAlign: "left" }}>Address: Farmers Welfare Room No 131, Krishi Bhawan, Delhi</p>
</div>
<div>
<p style={{ textAlign: "right" }}>Follow Us:</p>
<div style={{ textAlign: "right" }}>
<a href="" target="_blank" rel="noopener noreferrer">Facebook</a>
<br />
<a href="" target="_blank" rel="noopener noreferrer">Twitter</a>
<br />
<a href="" target="_blank" rel="noopener noreferrer">Instagram</a>
<br />
<a href="" target="_blank" rel="noopener noreferrer">YouTube</a>
</div>
</div>
</div>
<p style={{ textAlign: "center" }}>&copy; 2023 Agriculture Economy India. All rights reserved.</p>
<p style={{ textAlign: "center" }}><a href="">Privacy Policy</a> | <a href="">Terms of Service</a></p>
</footer>
</div>
);
};

export default Myhomeapp;
