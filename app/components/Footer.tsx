"use client"

import React from 'react';
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Container=styled.div`
    display: flex;

`;
//  ${mobile({flexDirection:'column'})}

const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 0.8rem;
`;
const Logo=styled.h1``;

const Desc=styled.p`
`;
const SocialContainer=styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${(props)=>props.color};
`;
const Center=styled.div`
    flex: 1;
    padding: 20px;
    
    `;
    // ${mobile({display:'none'})}
const Title=styled.h3`
    margin-bottom: 30px;
`;
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    /* gap: 0.1rem; */
`;
const ListItem=styled.li`
    width: 50%;
    margin-bottom:10px;
    cursor: pointer;

`;
const Right=styled.div`
    flex: 1;
    padding: 20px;

    
`;
const ContactItem=styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 15px;
`;
const Payment=styled.img`
    width: 70%;
`;


export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>Krishna</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta debitis odio soluta sunt quidem voluptates aliquam ullam quam, nulla eum ab assumenda ipsam quae amet facere, dolor blanditiis at!</Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'><FacebookIcon/> </SocialIcon>
                <SocialIcon color='E4405F'><InstagramIcon/> </SocialIcon>
                <SocialIcon color='55ACEE'><TwitterIcon/> </SocialIcon>
                <SocialIcon color='E60023'><PinterestIcon/> </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man</ListItem>
                <ListItem>Woman</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Orders</ListItem>
                <ListItem>Terms</ListItem>
            </List>

        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomIcon/>1187,Vyas Bhawan,BITS PILANI
            </ContactItem>
            <ContactItem>
                <PhoneIcon/>+919898989898
            </ContactItem>
            <ContactItem>
                <MailIcon/>bitspilani@pilani.ac.in
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

        </Right>
    </Container>
  )
}
