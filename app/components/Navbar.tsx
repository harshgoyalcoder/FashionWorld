"use client"
import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';

const Container = styled.div`
  height:60px;
  `;
  // ${mobile({height:'50px'})}
  const Wrapper=styled.div`
 padding:10px 20px;
 display:flex;
 justify-content:space-between;
 `
//  ${mobile({padding:'10px 0px',justifyContent:"center"})}
const Left=styled.div`
 flex: 1;
 display: flex;
 align-items: center;
`;
const Language=styled.span`
  font-size: 14px;
  cursor: pointer;
  `;
  // ${mobile({display:'none'})}
const SearchContainer=styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  
  `;
  // ${mobile({marginLeft:'10px'})}
const Input=styled.input`
  border: none;
  `;
  // ${mobile({width:'50px'})}
const Center=styled.div`
  flex: 1;
  text-align: center;

  `;
const Logo=styled.div`
  font-weight: bold;
  
  `;
  // ${mobile({fontSize:'24px'})}
  // ${mobile({marginLeft:'20px'})}
const Right=styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  , justifyContent:"center"})}
  `;
  // ${mobile({flex:"2",gap:'1rem'
const MenuItem=styled.div`
  font-size: 14px;
  cursor: pointer;
  /* margin-left: 25px; */
  
  `;
  // ${mobile({fontSize:"12px",marginLeft:"10px"})}

export default function Navbar() {;

  // const quantity= useSelector(state=>state?.cart?.quantity)

  return (
    <Container>
         <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input placeholder="Search"/>
                <SearchIcon style={{color:'gray',fontSize:16}}/>
              </SearchContainer>
            </Left>
            <Center>
              <Logo>Krishna</Logo>
            </Center>
            <Right>
              <MenuItem>Register</MenuItem>
              <button onClick={()=>signIn("google")}>Log In</button>
              <button onClick={signOut}>Sign Out</button>
              <Link href="/cart">
              <MenuItem>
              <Badge badgeContent={"12"} color="primary">
               <ShoppingCartOutlinedIcon color="action" />
              </Badge>
              </MenuItem>
              </Link>
              
            </Right>
         </Wrapper>
    </Container>
  )
}
