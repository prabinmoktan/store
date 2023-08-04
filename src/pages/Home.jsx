import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Products from './Products'
import Body from '../components/Body'


const Home = () => {
  

  

  return (
    <>
        <Navbar />
        <Body/>
       <Products  />
        
    </>
  )
}

export default Home