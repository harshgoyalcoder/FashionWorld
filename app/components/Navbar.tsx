"use client"
import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { Box, Button, Input } from '@mui/material';

const Container = styled.div`
  height:60px;
  `;
 
const Language=styled.span`
  font-size: 14px;
  cursor: pointer;
  `;
const SearchContainer=styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  
  `;


export default function Navbar() {;

  // const quantity= useSelector(state=>state?.cart?.quantity)
const handleSignOut=()=>{
  signOut();
}

  return (
    <Container>
      <Box sx={{marginTop:"1rem",display:"flex",justifyContent:"space-around"}}>

              <Language>EN</Language>
              <SearchContainer>
                <Input placeholder="Search"/>
                <SearchIcon style={{color:'gray',fontSize:16}}/>
              </SearchContainer>
              <h3>Krishna</h3>
              <Button href='/register'>Register</Button>
              <Button href='login'>Log In</Button>
              <Button onClick={handleSignOut}>Sign Out</Button>
              <Link href="/cart">
              <div>
              <Badge badgeContent={"12"} color="primary">
               <ShoppingCartOutlinedIcon color="action" />
              </Badge>
              </div>
              </Link>
      </Box>

    </Container>
  )
}
