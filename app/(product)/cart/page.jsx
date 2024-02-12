"use client"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mobile from '../../responsive';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import {useRouter} from 'next/navigation'
import StripeCheckout from 'react-stripe-checkout';

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
  
  const [stripeToken,setStripeToken]=useState(null);
  const router =useRouter();

  const onToken = (token)=>{
    console.log(token);
    // setStripeToken(token);
    makePayment(token);
  };
  const makePayment = async (token) => {
    try {
      // Make a request to your server (API route) to process the payment
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokenId: token.id,
          amount: cart.total * 100, // Assuming cart.total is the total amount in dollars
        }),
      });
  
      if (response.ok) {
        // Payment successful, redirect or handle success as needed
        router.push('/');
      } else {
        // Handle payment failure
        console.error('Payment failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };
  useEffect(()=>{
    const makeRequest= async () => {
      try{
        const res=await publicRequest.post("/payment",{
          tokenId:stripeToken.id,
          amount:500,
        });
        router.push('/');
      }catch(err){console.log("err hai bhai!")}
    };
    stripeToken && makeRequest();
  },[stripeToken,cart.total,router]);

const session=useSession();
console.log(cart)

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
          <Hr/>

        </Info>

        <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
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
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>

          
            <StripeCheckout
              name='Krishna'
              image='https://w0.peakpx.com/wallpaper/480/995/HD-wallpaper-lord-krishna-bhagwan-krishna-lord-shree-thumbnail.jpg'
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken} // Call onToken function when Stripe creates a token
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
        </Summary>

       </Bottom>

     </Wrapper>

</Container>
  )
}
