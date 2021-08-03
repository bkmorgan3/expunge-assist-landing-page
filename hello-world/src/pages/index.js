import React, { useEffect } from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const AppContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: none;
`

const Heading = styled.h1`
  text-align: center;
  font-family: "Roboto";
  font-weight: 200;
`

export default function Home() {
  useEffect(() => {
    document.title = `Expunge Assist Homepage`
  })
  return (
    <AppContainer>
      <Nav />
      <Heading>Luna is my homie</Heading>
      <Footer />
    </AppContainer>
  )
}
