import React from 'react'
import  q  from '../assets/q.webp';
import '../App.css'
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <>
    <div className='w-100 position-relative   '>
        <img src={q} alt="image" className='w-100 d-block opacity-75  body' style={{height: "43rem"}} />
        <div className='me-5 position-absolute textbody opacity-100 '>
            
        <h1 className='  text-black font-extrabold' style={{fontSize:"8rem"}}>You Choose <br /> We Deliver</h1>
        <p className='text-white ms-5 'style={{fontFamily:"cursive"}}>Want to see more exciting products...!</p>
        <Link className=' p-2 link-underline link-underline-opacity-0 w-25 explore link-offset-3 ' to={"/Products"}>Explore</Link>
        </div>
        
        
    </div>
    </>
  )
}

export default Body