"use client"
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/app/GlobalRedux/cartSlice';
import Box, { Button } from '@mui/material'
import { useSelector } from 'react-redux';

 interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
const product: Product = {
  id: 1,
  name: 'Sample Product',
  quantity:1,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price: 99.99,
  imageUrl: '/assets/image-4.svg',
};
export default function Product() {
  
  const dispatch=useDispatch();
  
  const handleClick=()=>{
    dispatch(addProduct(product));
  }

  return (
    <div className="container mx-auto py-8">
    <div className="flex flex-col md:flex-row">
      {/* Product Image (50%) */}

      <div className="w-full md:w-1/2">
        <img
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover"
        />
      </div>

      {/* Product Details (50%) */}
      <div className="w-full md:w-1/2 px-4 md:px-8 py-4">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-4">${product.price}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam harum quis accusantium, iusto quidem sequi vero iste blanditiis aliquam ipsa ipsum odio voluptatum excepturi quisquam in corrupti minima fugiat laudantium?</p>
        {/* Add other product details here */}
        <Button onClick={handleClick}>Add To Cart</Button>
      </div>
    </div>
  </div>
  )
}
