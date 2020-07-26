import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#5f27cd", color: "#fff" }}
    >
      <div className="row" style={{ justifyContent: "center" }}>
        <div
          className="col-12 col-md-3"
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "2.5",
          }}
        >
          <h3>Links</h3>
          <NavLink style={{ color: "#fff", textDecoration: "none" }} to="/">
            Home
          </NavLink>
          <NavLink
            style={{ color: "#fff", textDecoration: "none" }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink style={{ color: "#fff", textDecoration: "none" }} to="/menu">
            Menu
          </NavLink>
          <NavLink
            style={{ color: "#fff", textDecoration: "none" }}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="col-12 col-md-3">
          <h3>Address</h3>
          Our Address 121,
          <br /> Clear Water Bay Road Clear Water Bay,&nbsp;Kowloon
          <br /> HONG KONG <br />: +852 1234 5678 <br />: +852 8765 4321 <br />:
          confusion@food.net
        </div>
        <div className="col-12 col-md-3">
          <h3>Social</h3>
          <p style={{ textAlign: "justify" }}>
            <i className="fa fa-phone">Phone</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
