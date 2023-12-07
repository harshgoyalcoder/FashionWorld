"use client"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/app/GlobalRedux/cartSlice';

const Container=styled.div`
    
`;
const Wrapper=styled.div`
    display: flex;
    padding: 50px;
    `;
    // ${mobile({flexDirection:'column',padding:'10px'})}
const ImgContainer=styled.div`
    flex: 1;
`;
const Image=styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    `;
    // ${mobile({height:'60vh'})}
const InfoContainer=styled.div`
    flex: 1;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `;
    // ${mobile({padding:'5px',gap:'0.3rem'})}
const Title=styled.h1`
    font-weight:200;
    `;
    // ${mobile({fontSize:'25px'})}
const Desc=styled.p`
`;
// ${mobile({fontSize:'12px'})}
const Price=styled.span`
    font-size: 40px;
    font-weight: 100;
    `;
    // ${mobile({fontSize:'25px'})}
const FilterContainer=styled.div`
    display: flex;
    margin: 30px 0;
    width: 50%;
    justify-content: space-between;
    `;
    // ${mobile({width:'80%',margin:'10px 0'})}
const Filter=styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
    margin:0px 5px;
    cursor: pointer;
    &:hover{
      transform: scale(1.1);
    }
`;
const FilterSize=styled.select`
    padding: 5px;
    margin-left: 10px;
`;
const FilterSizeOption=styled.option`
    
`;
const AddContainer=styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    `;
    // ${mobile({width:'80%'})}
const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border: 1.5px solid teal;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    `;
    // ${mobile({margin:'0 10px '})}
const Button=styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
    &:hover{
      background-color: #f8f4f4;
  }
  `;
  // ${mobile({width:'40%',fontSize:'12px',padding:'10px'})}


export default function Product() {
  const id= location.pathname.split("/")[2];
  const [product,setProduct]= useState({});
  const [quantity,setQuantity]= useState(1);
  const [color,setColor]= useState("");
  const [size,setSize]= useState("");
  const dispatch=useDispatch();

  useEffect(()=>{
    // const getProduct = async ()=>{
    //   // try{
    //   //    const res= await publicRequest.get("/products/find/"+id);
    //   //    setProduct(res.data);
    //   //   //  console.log(res);
    //   //   }catch(err){console.log("err");};
    // }
    // getProduct();
    setProduct({
      img:"wedf",
      title:"dummy",

    })

  },[id]);


  const handleQuantity=(type:any)=>{
    if(type=== "dec"){
      quantity>1&& setQuantity(quantity-1);   
    }else{
      setQuantity(quantity+1);
    }
  };

  const handleClick=()=>{
    dispatch(addProduct({...product,quantity,color,size}));
  }



  return (
    <Container>

    <Wrapper>
     <ImgContainer>
     <Image src={"product.img"} />
     </ImgContainer>  

     <InfoContainer>
      <Title>{"product.title"}</Title>
      <Desc>{"product.des"}</Desc>
      <Price>$ {"product.price"}</Price>
      {/* <FilterContainer>
        <Filter>
          <FilterTitle>Color</FilterTitle>

          {product.color?.map((c)=>(
            <FilterColor color={c} key={c} onClick={()=>setColor(c)} />
          ))}
        </Filter>

        <Filter>
          <FilterTitle>Size</FilterTitle>
          <FilterSize onChange={(e)=>setSize(e.target.value)}>
          {product.size?.map((s)=>(
            <FilterSizeOption key={s}>{s}</FilterSizeOption> 
          ))}
            
          </FilterSize>
        </Filter>


      </FilterContainer> */}
      <AddContainer>
        <AmountContainer>
          <RemoveIcon onClick={()=>handleQuantity("dec")} />
         
          <Amount>{quantity}</Amount>
         <AddIcon onClick={()=>handleQuantity("inc")} />
        </AmountContainer>
          <Button onClick={handleClick} >ADD TO CART</Button>
      </AddContainer>



     </InfoContainer>
    </Wrapper>

</Container>
  )
}
