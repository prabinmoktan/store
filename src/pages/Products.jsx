import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/axios.service';
import ProductCard from '../components/ProductCard';



const Products = () => {
    const [products, setProducts] = useState([]);
    

    const getProductsData = async() => {
        const response= await getProducts();
        console.log(response);
        setProducts(response);
    }
     
    useEffect(() => {
        getProductsData();
    },[]);

    
  return (
    
   <>
   

   <div className='d-flex justify-content-between container mt-5 flex-wrap'>
   {
    products &&    
    products?.map((prods)=>{
        return (<ProductCard key={prods.id} prods={prods}/>)
    })
   }
   </div>
   
   </>
  )
}

export default Products