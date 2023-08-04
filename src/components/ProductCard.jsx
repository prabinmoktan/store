import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ProductCard = ({ prods }) => {
  const navigate = useNavigate();

  if (prods.title.length > 20) {
    prods.title = prods.title.slice(0, 20) + "...";
  }

  if (prods.description.length > 60) {
    prods.description = prods.description.slice(0, 60) + "...";
  }
  const viewProducthandler = (id) => {
    event.preventDefault();
    
    navigate(`/products/${id}`);
  };
  return (
    <>
      <div className="card mt-5 border-none" style={{ width: "18rem" }}>
        <div className="img-body">
          <img
            className="card-img-top"
            src={prods.image}
            alt="Card image cap"
            style={{ height: "14rem" }}
          />
          <h5 className="card-title">{prods.title}</h5>
        </div>

        <div className="card-body">
          
          <h3 className="mt-2">${prods.price}</h3>
          <p className="card-text">{prods.description}</p>
          <button
            className="btn btn-primary align-items-center"
            onClick={() => viewProducthandler(prods.id)}
          >
            View Product
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
