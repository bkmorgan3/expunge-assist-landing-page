import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const PageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  padding: 0;
  margin: 0;
`

export default function About() {
  return (
    <PageContainer>
      <Nav />

      <Footer />
    </PageContainer>
  )
}
