import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

import mission from "../assets/images/mission.png"
import history from "../assets/images/history.png"
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
`

const MissionTextContainer = styled.div`
  width: 50%;
  padding-left: 65px;
  margin-top: 20px;
`

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
`

const Image = styled.img`
  height: 100%;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const VolunteerButton = styled.button`
  background-color: #f8cd58;
  height: 51px;
  border-radius: 8px;
  padding: 12px 18px;
  letter-spacing: 2px;
  font-size: 16px;
  border: none;

  &:hover {
    cursor: pointer;
    border: none;
    background-color: dodgerblue;
    color: #fff;
  }
`

const PartnerButton = styled.button`
  background-color: #9903ff;
  border-radius: 8px;
  padding: 12px 18px;
  margin-left: 100px;
  color: #fff;
  font-size: 16px;
  font-family: "mulish";
  letter-spacing: 2px;
  line-height: 18px;

  &:hover {
    background-color: #c5b3d1;
    cursor: pointer;
    border: none;
    color: #000;
  }
`

const HistorySection = styled.div`
  width: 100%;
  background-color: #f9f1ff;
  height: 450px;
  display: flex;
`

const TextContainer = styled.div`
  width: 50%;
`

export default function About() {
  return (
    <PageContainer>
      <Nav />

      <MissionContainer>
        <MissionTextContainer>
          <Heading>Our Mission</Heading>
          <MissionStatement>
            Expunge Assist (formerly known as the Record Clearance Project) is a
            project of Hack for LA. Expunge Assist helps people in California
            with criminal records accomplish record clearance, expungement or
            reduction as a result of Prop 47 & Prop 64.
          </MissionStatement>
          <ButtonContainer>
            <VolunteerButton>Volunteer With Us</VolunteerButton>
            <PartnerButton>Become a Partner</PartnerButton>
          </ButtonContainer>
        </MissionTextContainer>
        <ImageContainer>
          <Image src={mission} alt="success image" />
        </ImageContainer>
      </MissionContainer>

      <HistorySection>
        <ImageContainer>
          <Image src={history} alt="woman shouting into megaphone" />
        </ImageContainer>

        <TextContainer>
          <Heading>Our History</Heading>

          <MissionStatement>
            Record clearance or reduction in California is possible as a result
            of legislation which includes Prop 64 & Prop 47.
          </MissionStatement>

          <MissionStatement>
            Community organizers and non-profits are already working in this
            space to clear records for millions of eligible cases.
          </MissionStatement>
          <MissionStatement>
            New legislation under AB 1793 has initiated the process of
            automation for many of these records.
          </MissionStatement>

          <MissionStatement>
            Still, many Californians will still have to submit a petition to
            have their record cleared.
          </MissionStatement>
        </TextContainer>
      </HistorySection>

      <Footer />
    </PageContainer>
  )
}
