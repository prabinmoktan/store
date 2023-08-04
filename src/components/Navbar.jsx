import React from "react";

import { Link } from "react-router-dom";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Search/Search.css";
import Search from "./Search/Search";
import w from "../assets/w.png";

const Navbar = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between   bg-black "
        style={{ height: "90px" }}
      >
        <Link to={"/"} className="d-flex text-decoration-none ">
          <img src={w} className="ms-5 h-100" />
          <h4 className="mt-3 link-underline-opacity-0 text-white ">Store</h4>
        </Link>
        {/* <input type="text" /><button><BsSearch/></button></> */}
        <Search className="mt-3" />
        <Link
          to={"/Products"}
          className="  text-white me-5  link-offset-3-hover text-decoration-none  mt-3   "
        >
          <h4>Products</h4>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
