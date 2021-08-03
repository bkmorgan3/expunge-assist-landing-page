import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

import FAQImg from "../assets/images/FAQ.png"
import "@fontsource/mulish"

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

const HelpSection = styled.div`
  width: 100%;
  min-height: 30%;
  background-color: #fffaf2;
  display: flex;
  margin: 0;
  height: 551px;
`

const TextContainer = styled.div`
  width: 50%;
`

const ImageContainer = styled.div`
  width: 50%;
`

const Image = styled.img`
  width: 100%;
`

const Heading = styled.h1`
  font-family: "mulish";
`

export default function FAQ() {
  return (
    <PageContainer>
      <Nav />
      <HelpSection>
        <TextContainer>
          <Heading>Frequently Asked Questions:</Heading>
          <h3>How can we help you?</h3>
        </TextContainer>
        <ImageContainer>
          <Image src={FAQImg} alt="people asking questions" />
        </ImageContainer>
      </HelpSection>
      <Footer />
    </PageContainer>
  )
}
