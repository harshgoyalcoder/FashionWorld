"use client"
import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    display: flex;
    justify-content: center;
`;
export default function Announcement() {
  return (
    <Container>Super Deal ! Free Shipping on order above $50</Container>
  )
}
