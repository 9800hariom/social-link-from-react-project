import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  background-color: #000;
`;

const Card = styled.div`
  background-color: #222;
  
  padding-height:100px;
  padding-width:700px;

   
  width: 350px;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  
 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-left:108px;
   margin-top:40px;
`;

const Name = styled.h1`
  font-size: 24px;
  margin: 10px 0;
 
`;

const Location = styled.p`
  color: #a0e96e;
  font-size: 14px;
  margin: 5px 0;
  
`;

const Bio = styled.p`
  font-size: 14px;
  margin: 10px 0;
  color: #aaa;
  
`;

const Button = styled.a`
  display: block;
  background-color: #444;
  color: #fff;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
 margin-left:10px;
  margin-right:10px;
   margin-top:15px;
  &:hover {
    background-color: #555;
  }

  svg {
    margin-right: 8px;
  }
`;

// Body Component
const Body = () => {
  return (
    <Container>
      <Card>
        <Avatar src="avatar-jessica.jpeg" alt="Jessica Randall " />
        <Name>Jessica Randall</Name>
        <Location>London, United Kingdom</Location>
        <Bio>"Front-end developer and avid reader."</Bio>
        <Button href="https://github.com/">
          <FaGithub /> GitHub
        </Button>
        <Button href="https://frontendmentor.io/">
          <FaGithub /> Frontend Mentor
        </Button>
        <Button href="https://linkedin.com/">
          <FaLinkedin /> LinkedIn
        </Button>
        <Button href="https://twitter.com/">
          <FaTwitter /> Twitter
        </Button>
        <Button href="https://instagram.com/">
          <FaInstagram /> Instagram
        </Button>
      </Card>
    </Container>
  );
};

export default Body;
