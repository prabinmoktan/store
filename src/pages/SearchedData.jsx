import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const SearchedData = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate()

  useEffect(()=>{
    const localItem =localStorage.getItem("items");
    // const localItem = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : null  
    setProduct(JSON.parse(localItem));
  },[product])

 
  const viewProducthandler = (id) => {
    event.preventDefault();
    
    navigate(`/products/${id}`);
  };
  return (
    <>
    
    <div className='d-flex justify-content-between container  flex-wrap'>
      
    {
      product.length > 0 && 
      product.map((prods) => {
        
          return (<div className="card mt-5 border-none" key={prods.id} style={{ width: "18rem" }}>
          <div className="img-body">
            <img
              className="card-img-top"
              src={prods.image}
              alt="Card image cap"
              style={{ height: "14rem" }}
            />
            <h5 className="card-title">{prods.title}</h5>
          </div>
  
          <div className="card-body ">
            
            <h3 className="mt-5">${prods.price}</h3>
            <p className="card-text">{prods.description.slice(0,80)+"..."}</p>
            <button
            className="btn btn-primary align-items-center ms-5"
            onClick={() => viewProducthandler(prods.id)}
          >
            View Product
          </button>
            
          </div>
        </div>)
        
      })
    }
    </div>
    
    </>
  )
}

export default SearchedData