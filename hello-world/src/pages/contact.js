import React from "react"
import Header from "../components/headers";
import Nav from "../components/Nav";
import ContactImg from "../assets/images/contact.png";

import styled from "styled-components";

const ContactContainer = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  font-size: 1.5em;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50%;
`;

const ImageContainer = styled.div`
  width: 50%;
`;
const FormContainer = styled.div`
  width: 50%;
  border: 1px solid blue;
  margin-right: 10px;
`;

const Image = styled.img`
  width: 70%;
`;

const RadioButtonContainer = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid purple;
  height: 200px;
`;

export default function Contact() {
  return (
    <ContactContainer>
      <Nav />
      <HeaderContainer>
        <h2>Interested in what we're doing ?</h2>
        <h2>Send us an email at <b>info@expungeassist.org</b></h2>
      </HeaderContainer>
      <ContentContainer>
        <ImageContainer>
          <Image src={ContactImg} alt=" man" />
        </ImageContainer>
        <FormContainer>
           <form action="https://getform.io/f/c2344ce2-c2ca-4fce-ba76-1bdefd869586" method="post">
       <RadioButtonContainer>
         <label htmlFor="partnership">
           Interested in Partnership
           <input type="radio" />
         </label>
         <label htmlFor="volunteering">
           Interested in Volunteering?
           <input type="radio" />
         </label>
       </RadioButtonContainer>
       <InputContainer>
       
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
        </label>

        <label htmlFor="email">
          Email
          <input type="email" name="email" />
          </label>
          <label htmlFor="message">
            Message
            <textarea placeholder="Fuck off" name="message" />
        </label>
        </InputContainer>
      </form>
        </FormContainer>
      </ContentContainer>
     
    </ContactContainer>
  )
}