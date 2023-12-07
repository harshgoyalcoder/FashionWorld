"use client"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import Footer from '../../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import mobile from '../../responsive';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
// import StripeCheckout from 'react-stripe-checkout';
// import { useNavigate } from 'react-router';
// import {publicRequest, userRequest} from "../requestMethods";

const KEY ="pk_test_51N1krTLYe2nKSSseF84F6BvZk7236dstWiuYbLcwr8UHCQpW8Rf2SNPeNzQAgUYjGALDq9vDepH0BhYJHbcRs37K00MFz7fiKh";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
 ${mobile({padding:'5px'})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
 ${mobile({fontSize:'25px'})}

`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
 ${mobile({padding:'5px 15px '})}

`;

const TopButton = styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: ${(props)=>props.type==="filled" && "none"};
   background-color: ${(props)=>props.type==="filled" ?"black":"transparent"};
   color: ${(props)=>props.type==="filled"&&"white"};

`;

const TopTexts = styled.div`
 ${mobile({display:'none'})}

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
 ${mobile({flexDirection:'column'})}

  

`;

const Info = styled.div`
   flex: 3;
`;

const Product = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  /* padding: 20px; */
 ${mobile({flexDirection:'column'})}

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  /* align-items: center; */
`;

const Image = styled.img`
   /* object-fit: cover; */
   width: 200px;
   /* height: 300px; */
`;

const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   /* gap: 1rem; */

`;

const ProductName = styled.span`
  
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color:  ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* gap: 1rem; */
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 0.5rem;

`;

const ProductAmount = styled.div`
  font-size: 24px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
   flex: 1;
   border: 0.5px solid lightgray;
   border-radius: 10px;
   padding: 20px;
   height: 50vh;
 ${mobile({margin:'20px'})}

`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props)=>props.type==="total" && "500"};
  font-size: ${(props)=>props.type==="total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
export default function Cart() {

  const cart=useSelector((state)=>state.cart);
console.log("cart",cart);
  // //checkout button
  // const handleCheckout = async () => {
  //   const stripe = await getStripe();

  //   const response = await publicRequest.post("/checkout/payment", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(cart),
  //   });

  //   if(response.statusCode === 500) return;
    
  //   const data = await response.json();
  //   console.log("data");

  //   toast.loading('Redirecting...');

  //   stripe.redirectToCheckout({ sessionId: data.id });
  // }
  // stripe token
  const [stripeToken,setStripeToken]=useState(null);
  // const navigate =useNavigate();

  const onToken = (token)=>{
    console.log(token);
    setStripeToken(token);
  };
  
  // useEffect(()=>{
  //   const makeRequest= async () => {
  //     try{
  //       console.log("chal")
  //       const res=await publicRequest.post("/checkout/payment",{
  //         tokenId:stripeToken.id,
  //         amount:500,
  //       });
  //       console.log("chal2")
  //       navigate("/success",{data:res.data});
  //       // console.log(res.data);
  //       // console.log("chal gya abhi");
  //     }catch(err){console.log("err hai bhai!")}
  //   };
  //   stripeToken && makeRequest();
  // },[stripeToken,cart.total,navigate]);
const session=useSession();

if (!session) {
  return (
    <div className='w-full'>
      <p>Please log in to access your cart.</p>
      {/* Add a login link or button here */}
    </div>
  );
}
  return (
    <Container>
    {/*=============== main section========== */}
     <Wrapper>
        <Title>YOUR BAG</Title>
       <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>

        <TopButton type='filled'>CHECKOUT NOW</TopButton>

       </Top>
       <Bottom>
        <Info>
        {/*
      
            {cart.products.map((product)=>(

             <Product>
                <ProductDetail>
                <Image src={product.img} />
                    <Details>
                        <ProductName><b>Product:</b> {product.title}</ProductName>
                        <ProductId><b>ID:</b> {product._id}</ProductId>
                        <ProductColor color={product.color}/>
                        <ProductSize><b>Size:</b>{product.size}</ProductSize>
                    </Details>
                </ProductDetail>

                <PriceDetail>
                    <ProductAmountContainer>
                        <AddIcon/>
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <RemoveIcon/>
                    </ProductAmountContainer>

                    <ProductPrice>${product.price*product.quantity}</ProductPrice>
                </PriceDetail>
            </Product>

            ))}
            */}
          <Hr/>

        </Info>

        <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {"cart.total"}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {"cart.total"}</SummaryItemPrice>
            </SummaryItem>

          {/* 
         <StripeCheckout
              name='Krishna'
              image='https://w0.peakpx.com/wallpaper/480/995/HD-wallpaper-lord-krishna-bhagwan-krishna-lord-shree-thumbnail.jpg'
              billingAddress
              shippingAddress
              description={`Your total is$${cart.total}`}
              amount={cart.total*100}
              token={onToken}
              stripeKey={KEY}
              // key={KEY}

              
            >
            <Button >CHECKOUT NOW</Button>
            </StripeCheckout>
            */} 
        </Summary>

       </Bottom>

     </Wrapper>

</Container>
  )
}
