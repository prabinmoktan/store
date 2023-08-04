
import React from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import SearchedData from './pages/SearchedData'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='/search' element={<SearchedData/>}/>
      </Routes>
    </>
  )
}

export default App
