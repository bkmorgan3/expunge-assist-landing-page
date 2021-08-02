import React from "react"
import Header from "../components/headers"
import Nav from "../components/Nav"
import ContactImg from "../assets/images/contact.png"
import "@fontsource/mulish";

import styled from "styled-components"

const ContactContainer = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
  `

const Headings = styled.h2`
font-family: "Mulish";
margin-bottom: 0;


`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50%;
`

const ImageContainer = styled.div`
  width: 50%;
  `
const FormContainer = styled.div`
  width: 50%;
  margin-right: 10px;
  padding-right: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `

const Image = styled.img`
  width: 70%;
  padding-left: 150px;
  `

const RadioButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  height: 20px;
  border: none;
  background: #f4f5f4;
  height: 42px;
  width: 447px;
`

const Label = styled.label`
  font-size: 12px;
  line-height: 16px;
  color: #373F41;
  margin-bottom: 5px;
  
`

const Textarea = styled.textarea`
  background: #f4f5f4;
  height: 122px;
  width: 447px;
`

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const RadioInputContainer = styled.div`
  display: flex;
`

export default function Contact() {
  return (
    <ContactContainer>
      <Nav />
      <HeaderContainer>
        <Headings>Interested in what we're doing ?</Headings>
        <Headings>
          Send us an email at <b>info@expungeassist.org</b>
        </Headings>
      </HeaderContainer>
      <ContentContainer>
        <ImageContainer>
          <Image src={ContactImg} alt=" man" />
        </ImageContainer>
        <FormContainer>
          <form
            action="https://getform.io/f/c2344ce2-c2ca-4fce-ba76-1bdefd869586"
            method="post"
          >
            <RadioButtonContainer>
              <RadioInputContainer>
                <input type="radio" />
                <Label>Interested in Partnership?</Label>
              </RadioInputContainer>
              <RadioInputContainer>
                <input type="radio" />
                <Label>Interested in Volunteering?</Label>
              </RadioInputContainer>
            </RadioButtonContainer>
            <InputContainer>
              <InputFieldContainer>
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" />
              </InputFieldContainer>
              <InputFieldContainer>
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" />
              </InputFieldContainer>
              <InputFieldContainer>
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Leave us a note" name="message" />
              </InputFieldContainer>
            </InputContainer>
          </form>
        </FormContainer>
      </ContentContainer>
    </ContactContainer>
  )
}
