"use client"
// import { keyframes } from '@emotion/react';
import React from 'react'
import styled ,{keyframes} from 'styled-components';

const movingAnimation = keyframes`
  0% {
    transform: translateX(70%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MovingText = styled.div`
  animation: ${movingAnimation} 10s linear infinite;
  white-space: nowrap;
  position: absolute;
  /* right: 6; */
  left:0;
  width: max-content; 
`;



export default function Announcement() {
  return (
    <div className="h-10 bg-teal-500 text-white font-semibold flex items-center overflow-hidden">
      <MovingText>Super Deal! Free Shipping on orders above $50 - Limited Time Offer!</MovingText>
    </div>
  )
}
