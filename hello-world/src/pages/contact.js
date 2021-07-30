import React from "react"
import Header from "../components/headers";
import Nav from "../components/Nav";

import styled from "styled-components";

const ContactContainer = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  border: 1px solid tan;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  font-size: 1.5em;
`;

export default function Contact() {
  return (
    <ContactContainer>
      <Nav />
      <HeaderContainer>
        <h2>Interested in what we're doing ?</h2>
        <h2>Send us an email at <b>info@expungeassist.org</b></h2>
      </HeaderContainer>
      <form action="https://getform.io/f/c2344ce2-c2ca-4fce-ba76-1bdefd869586" method="post">
       <div>
         <label htmlFor="partnership">
           Interested in Partnership
           <input type="radio" />
         </label>
         <label htmlFor="volunteering">
           Interested in Volunteering?
           <input type="radio" />
         </label>
       </div>
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" />
          <label htmlFor="message">
            Message
            <textarea name="message">

            </textarea>
          </label>
        </label>
      </form>
    </ContactContainer>
  )
}