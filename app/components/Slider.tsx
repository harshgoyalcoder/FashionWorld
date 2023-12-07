import React, { useState } from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from '../data';
import mobile from '../responsive';
const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
  ${mobile({display:'none'})}

`;
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    left:${(props)=>props.direction==="left" && "10px"} ;
    right:${(props)=>props.direction==="right" && "10px"} ;
    margin: auto;
    cursor: pointer;
`;
const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transform: translate(${(props)=>props.slideIndex*-100}vw);
    transition: all 1.5s ease;

`;
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: aliceblue;
`;
const ImgContainer=styled.div`
    flex: 1;
    height: 100%;
`;
const Image=styled.img`
    height: 80%;
`;
const InfoContainer=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 50px;
`;
const Title=styled.div`
    font-size: 70px;
`;
const Desc=styled.div`
    max-width: 50px 0;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button=styled.div`
    padding: 10px;
    font-size: 20px;
    border: 2px solid;
    width: 120px;
    background-color: transparent;
    cursor: pointer;
`;

//functions

export default function Slider() {
    const [slideIndex,setSlideIndex]=useState(0);
        const handleClick =(direction)=>{
            if(direction==='left'){
                setSlideIndex(slideIndex>0? slideIndex-1:2);
            }else{
                setSlideIndex(slideIndex<2? slideIndex+1:0);
            }
        }
   
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowBackIosIcon/>
        </Arrow>
        { <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
               <Slide key={item.id}>
                <ImgContainer>
                <Image alt="" src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Explore More</Button>
                </InfoContainer>
            </Slide>
 
            ))}
            
        </Wrapper> }

        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIosIcon/>
        </Arrow>
    </Container>
  )
}
