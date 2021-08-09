import React, { useEffect } from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

import laptop from "../assets/images/laptop.png"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`

const GreetingContainer = styled.div`
  width: 100%;
  background-color: #fffaf2;
  height: 550px;
  display: flex;
`

const GreetingTextContainer = styled.div`
  width: 50%;
  padding-top: 30px;
`

const GreetingImageContainer = styled.div`
  width: 50%;
`

const GreetingHeader = styled.p`
  font-family: "mulish";
  font-size: 2.2em;
  padding-left: 40px;
  font-weight: 800;
  line-height: 45px;
  letter-spacing: 1px;
`
const PurpleText = styled.span`
  font-family: "mulish";
  font-size: 1.5em;
  color: #9903ff;
`

const BoldHeaderContainer = styled.div`
  width: 60%;
  padding-left: 50px;
`

const GreetingImage = styled.img`
  width: 90%;
  height: 90%;
`

const GreetingDescriptionContainer = styled.div`
  padding: 10px 0 40px 40px;
`

const GreetingDescriptionText = styled.p`
  font-size: 0.8em;
  font-weight: normal;
  line-height: 40px;
  letter-spacing: 0.7px;
`

const PartnersContainer = styled.div`
  width: 100%;
  min-height: 600px;
  background-color: #fff;
`

export default function Home() {
  useEffect(() => {
    document.title = `Expunge Assist Homepage`
  })
  return (
    <AppContainer>
      <Nav />
      <GreetingContainer>
        <GreetingTextContainer>
          <GreetingHeader>
            <BoldHeaderContainer>
              <PurpleText>Expunge Assist</PurpleText>
              &nbsp; accelerates the
              <PurpleText> Record Clearance </PurpleText>
              process by helping you generate a personal statement.
            </BoldHeaderContainer>
            <GreetingDescriptionContainer>
              <GreetingDescriptionText>
                While still under development, Expunge Assist will aim to help
                people in California with criminal records accomplish record
                clearance, expungement or reduction.
              </GreetingDescriptionText>
            </GreetingDescriptionContainer>
          </GreetingHeader>
        </GreetingTextContainer>
        <GreetingImageContainer>
          <GreetingImage src={laptop} alt="" />
        </GreetingImageContainer>
      </GreetingContainer>
      <PartnersContainer></PartnersContainer>
      <Footer />
    </AppContainer>
  )
}
