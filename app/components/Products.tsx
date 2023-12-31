import React, { useState,useEffect } from 'react';
import styled from 'styled-components'
import Product from './Product';
import { popularProducts } from '../data';
import mobile from '../responsive';
import { publicRequest } from '../requestMethods';

const Container=styled.div`
 padding: 20px;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 ${mobile({padding:'10px'})}

`;
//  taking filters as props from the productList component 
export default function Products({cat,filters,sort}) {

  const[products,setProducts]=useState([]);
  const[filteredProducts,setFilteredProducts]=useState([]);

  useEffect(()=>{
    // function is--get products from our api
    // get and post request using axios library ( or javascript-fetch but axios is much easy to use)
    //async func because we are making request to our api
    const getProducts= async()=>{
      try{
        const res = await publicRequest.get(
          cat
            ? `/products?category=${cat}`
            : "/products"
        );
         setProducts(res.data);
        // console.log(res)
         
      }catch(err){
        console.log("error");
        
      };
    }
    getProducts();

  },[cat])
//  here [cat] is dependency---this means whenever cat changes just run the function --given inside useEffect


useEffect(() => {
  cat &&
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
}, [products, cat, filters]);

 useEffect(()=>{
  if(sort==="newest"){
    setFilteredProducts((prev)=>
     [...prev].sort((a,b)=>a.createdAt-b.createdAt)
    );

  }else if(sort==="asc"){
    setFilteredProducts((prev)=>
    [...prev].sort((a,b)=>a.price-b.price)
   );
  }else{
    setFilteredProducts((prev)=>
    [...prev].sort((a,b)=>b.price-a.price)
   );
  }
 },[sort]);

  return (
    <Container>
        {cat ? filteredProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        )):products.slice(0,4).map((item)=>(
          <Product item={item} key={item.id}/>
      ))}

    </Container>
  )
}
