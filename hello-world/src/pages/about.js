import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

import mission from "../assets/images/mission.png"
import "@fontsource/mulish"

const PageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const MissionContainer = styled.div`
  width: 100%;
  background-color: #fffaf2;
  height: 350px;
  display: flex;
`;

const MissionTextContainer = styled.div`
  width: 50%;
  padding-left: 65px;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  width: 40%;
`

const Heading = styled.h2`
  font-family: "mulish";
  font-size: 2em;
`

const MissionStatement = styled.p`
  font-family: "mulish";
  font-size: 1.4em;
  line-height: 1.4em;
  font-weight: 400;
  padding-right: 60px;
`;

const Image = styled.img`
  height: 100%;
`

const ButtonContainer = styled.div`
  width: 100%;
`

const VolunteerButton = styled.button`
  background-color: #F8CD58;
  height: 51px;
`

export default function About() {
  return (
    <PageContainer>
      <Nav />
      <MissionContainer>
        <MissionTextContainer>
          <Heading>
            Our Mission
          </Heading>
          <MissionStatement>
            Expunge Assist (formerly known as the Record Clearance Project) is a project of Hack for LA.  Expunge Assist helps people in California with criminal records accomplish record clearance, expungement or reduction as a result of Prop 47 & Prop 64.
          </MissionStatement>
          <ButtonContainer>
            <VolunteerButton>Volunteer With Us</VolunteerButton>
          </ButtonContainer>
        </MissionTextContainer>
        <ImageContainer>
          <Image src={mission} alt="success image" />
        </ImageContainer>
      </MissionContainer>
      <Footer />
    </PageContainer>
  )
}
