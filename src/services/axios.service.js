import React from 'react'
import axios from 'axios'

export const getProducts= async() => {
    const response = await axios.get('https://fakestoreapi.com/products');
    
    return response.data;
}


export const singleData = async(id) => {
    const response= await axios.get(`https://fakestoreapi.com/products/${id}`)
    
    return response.data;
}