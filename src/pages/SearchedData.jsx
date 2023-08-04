import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const SearchedData = () => {
  const [product, setProduct] = useState([]);

  useEffect(()=>{
    const localItem =localStorage.getItem("items");
    // const localItem = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : null      
    console.log("localItem", JSON.parse(localItem))
    setProduct(JSON.parse(localItem));
  },[])

  return (
    <>
    <Navbar/>
    <div className='d-flex justify-content-between container mt-5 flex-wrap'>
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
  
          <div className="card-body">
            
            <h3 className="mt-2">${prods.price}</h3>
            <p className="card-text">{prods.description}</p>
            
          </div>
        </div>)
        
      })
    }
    </div>
    
    </>
  )
}

export default SearchedData