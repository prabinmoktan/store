import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";
// import axios from "axios";
// import ProductCard from "../ProductCard"/;
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchKey, setSearchKey] = useState([]);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const getData = (value) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((prod) => {
          return (
            value &&
            prod &&
            prod.title &&
            prod.title.toLowerCase().includes(value)
          );
        });
        console.log(results);
        setProduct(results);
      });
  };

  const inputHandler = (value) => {
      
    
      setSearchKey(value);
      getData(value);
    
  };

  const searchHandler =(value) => {
    setSearchKey(value);
    const prod = getData(value);
    if(localStorage.setItem("items", JSON.stringify(prod)) != null){
      console.log("items", Json.stringify(prod))
    navigate("/search")
    }
    else{
      alert('please add items to card')
    }
    
    
    
    
    //  console.log(window.location.pathname)
   

  }


 

  return (
    <>
      <div className="  mt-3 rounded w-25 h-50  position-relative  bg-white d-flex ">
        <input
          type="text"
          className="border-0 outline-none rounded p-1 w-100"
          onChange={(e) => inputHandler(e.target.value)}
          // value={searchKey}
        />
        <button
          className=" border-0 mb-2 p-1 me-2 bg-white"
          onClick={(e) => searchHandler(e.target.value)}
          value={searchKey}
        >
          <BsSearch />
        </button>

        <div className=" position-absolute z-3  w-100 mt-5 bg-white rounded ">
          {product != null &&
            product.slice(0, 5).map((prods) => {
              return (
                <div
                  key={prods.id}
                  // className="d-flex flex-row  p-2  bg-white rounded border-bottom  position-absolute justify-content-between  w-100 "
                  className="d-flex justify-content-between border-bottom rounded mt-2 bg-white"
                >
                  <img
                    src={prods.image}
                    alt={prods.title}
                    style={{ height: "40px" }}
                  />
                  <h4 style={{ fontSize: "15px" }} className="p-1">
                    {prods.title}
                  </h4>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Search;
