import React from "react";
// import { Row, div } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import w from "../assets/w.png";
import "bootstrap/dist/css/bootstrap.min.css"

const Footer = () => {
  return (
    <>
      <div className="mt-5 border-top bg-black  bottom-0 text-white "  >
        <div className=" m-auto mt-4 mb-1 container d-flex justify-content-between "  style={{height:"20em"}}  >
          <div className="w-25 d-flex"  >
            <img src={w} alt="" className="h-50" />
            <h2 className="mt-5">Store</h2>
          </div>
          <div className="mt-5">
            
              
              <h4 className="ms-5">  Contact us on </h4>
              <div className="d-flex p-3 gap-3 ms-5">
              <h4>
                <FaFacebook />
              </h4>
              <h4>
                <FaInstagram />
              </h4>
            </div>
          </div>
          <div  className="mt-5 ms-3">
            <p>2023 - All rights reserved. Created by Prabin Lama</p>
            <p>Designed and Developed for Internship Task for SM TECH</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
