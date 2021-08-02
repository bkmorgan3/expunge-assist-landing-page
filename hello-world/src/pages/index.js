import React, { useEffect } from "react"
import styled from "styled-components"
import Nav from "../components/Nav"

const AppContainer = styled.div`
  width: 100%;
  border: 2px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  > h1 {
    text-align: center;
    font-family: "Roboto";
    font-weight: 200;
  }
`

export default function Home() {
  useEffect(() => {
    document.title = `Expunge Assist Homepage`
  })
  return (
    <AppContainer>
      <Nav />
      <h1>Luna is my homie</h1>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </AppContainer>
  )
}
