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

const PartnersFormSection = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
`

const PartnerFormContainer = styled.div`
  width: 60%;
`

const ColorsContainer = styled.div`
  width: 40%;
`

const PartnerForm = styled.div`
  height: 375px;
  width: 700px;
  border-radius: 8px;
  margin-left: 150px;
  margin-top: 30px;
  border: 8px solid rgba(245, 179, 4, 0.66);
  background-color: #fffaf2;
  font-size: 1.6em;
  padding-bottom: 10px;
`

const HeadingContainer = styled.div`
  width: 50%;
  margin-left: 100px;
`

const PartnerFormHeading = styled.h2`
  font-family: "mulish";
`

const WhyPartnersContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
`

const PartnerMissionContainer = styled.div`
  width: 100%;
  border: 1px solid blue;
  height: 300px;
`

const PurpledLetters = styled.span`
  color: #9903ff;
`

const PartnerFormText = styled.p`
  font-family: "mulish";
  margin-left: 100px;
`

const PartnerTextAction = styled.span`
  font-size: 0.9em;
  margin-left: 50px;
`

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
`

const Input = styled.input`
  border: 2px solid #000;
  background: #fff;
  height: 42px;
  width: 447px;
  border-radius: 8px;
`

const Label = styled.label`
  font-size: 16px;
  line-height: 16px;
  color: #373f41;
  margin-bottom: 5px;
  font-family: "Mulish";
`

const SubmitButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: #9903ff;
  width: 152px;
  height: 47px;
  color: #fff;
  font-size: 0.8em;
`

const HorizontalPurpleBand = styled.div`
  width: 100%;
  background-color: rgba(153, 3, 255, 0.5);
  height: 34px;
`

const WhyPartnerFieldContainer = styled.div`
  width: 50%;
`

const WhyPartnerField = styled.div`
  border: 8px solid rgba(153, 3, 255, 0.5);
  height: 374px;
  background-color: #fffaf2;
  border-radius: 8px;
  width: 700px;
  margin-left: 30px;
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
      <PartnersContainer>
        <PartnersFormSection>
          <PartnerFormContainer>
            <PartnerForm>
              <HeadingContainer>
                <PartnerFormHeading>
                  We're looking for <PurpledLetters>Partners</PurpledLetters> to
                  help!
                </PartnerFormHeading>
              </HeadingContainer>
              <PartnerFormText>Lorem Ipsum</PartnerFormText>
              <PartnerFormText>Ipsum Lorem</PartnerFormText>
              <PartnerTextAction>
                Sign up for more about becoming a partner and for project
                updates.
              </PartnerTextAction>
              <Form action="#" method="POST">
                <Label htmlFor="signup"></Label>
                <Input
                  placeholder="yourname@domain.com"
                  name="signup"
                  type="email"
                ></Input>
                <SubmitButton>Register</SubmitButton>
              </Form>
            </PartnerForm>
          </PartnerFormContainer>
          <ColorsContainer />
        </PartnersFormSection>
        <WhyPartnersContainer>
          <ColorsContainer></ColorsContainer>
          <WhyPartnerFieldContainer>
            <WhyPartnerField></WhyPartnerField>
          </WhyPartnerFieldContainer>
        </WhyPartnersContainer>
        <PartnerMissionContainer></PartnerMissionContainer>
      </PartnersContainer>
      <Footer />
    </AppContainer>
  )
}
