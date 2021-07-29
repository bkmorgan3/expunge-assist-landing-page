import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav"

const AppContainer = styled.div`
  width: 100%;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  > h1 {
    text-align: center;
    font-family: 'Roboto';
    font-weight: 200;
  }
`;

export default function Home() {
  return (
  <AppContainer>
    <Nav />
    <h1>Luna is my homie</h1>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </AppContainer>
  )
}
