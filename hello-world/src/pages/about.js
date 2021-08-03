import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const PageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
`

export default function About() {
  return (
    <PageContainer>
      <Nav />

      <Footer />
    </PageContainer>
  )
}
