import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/axios.service';
import ProductCard from '../components/ProductCard';




const Products = () => {
    const [products, setProducts] = useState([]);
    

    const getProductsData = async() => {
        const response= await getProducts();

        setProducts(response);
    }
     
    useEffect(() => {
        getProductsData();
    },[]);

    
  return (
    
   <>
   <div className='bg-black h-100 p-5'>
   <h1 className='d-flex justify-content-center text-white '>Trending Pages</h1>
    
    {/* <p>trending page</p> */}
   

   <div className='d-flex justify-content-between container mt-3 flex-wrap'>
   {
    products &&    
    products?.map((prods)=>{
        return (<ProductCard key={prods.id} prods={prods}/>)
    })
   }
   </div>
   </div>
   
   </>
  )
}

export default Products