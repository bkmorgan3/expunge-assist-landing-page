import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

import FAQImg from "../assets/images/FAQ.png"
import "@fontsource/mulish"

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const HelpSection = styled.div`
  width: 100%;
  min-height: 30%;
  background-color: #fffaf2;
  display: flex;
  margin: 0;
  height: 551px;
  margin-top: 10px;
  margin-bottom: 0;
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

const Heading = styled.h2`
  font-family: "mulish";
  padding-left: 65px;
  font-size: 3em;
`

const SubHeading = styled.h3`
  font-family: "mulish";
  padding-left: 65px;
  font-size: 2em;
`

const FAQSText = styled.p`
  font-family: "mulish";
  padding-left: 65px;
  font-size: 2em;
  margin-top: 2em;
`

const QuestionSection = styled.div`
  width: 100%;
  min-height: 30%;
  height: 1050px;
  background-color: #e5e5e5;
  margin-top: 0;
  border: 1px solid #e5e5e5;
  margin-bottom: 30px;
`

const QAContainer = styled.div`
  width: 70%;
`

const QuestionText = styled.h4`
  font-family: "mulish";
  font-size: 1.7em;
  margin-bottom: 0;
  margin-left: 65px;
`

const AnswerText = styled.p`
  font-family: "mulish";
  margin-left: 65px;
  font-size: 1.1em;
  letter-spacing: 1px;
`

const CourtLink = styled.a`
  color: dodgerblue;
  text-decoration: none;

  &::visited {
    color: red;
  }
  &:hover {
    color: dodgerblue;
  }
`

export default function FAQ() {
  return (
    <PageContainer>
      <Nav />
      <HelpSection>
        <TextContainer>
          <Heading>Frequently Asked Questions:</Heading>
          <SubHeading>How can we help you?</SubHeading>

          <FAQSText>Below is a list of commonly asked questions.</FAQSText>
        </TextContainer>
        <ImageContainer>
          <Image src={FAQImg} alt="people asking questions" />
        </ImageContainer>
      </HelpSection>
      <QuestionSection>
        <QAContainer>
          <QuestionText>Q: Why do I need a personal statement?</QuestionText>
          <AnswerText>
            The personal statement is a brief essay about your current life
            situation. You can use it to tell the judge why you’re worthy of
            having your felony conviction reclassified as a misdemeanor under
            Prop 47. You can also use it for the same purpose to reclassify your
            marijuana felony conviction to a misdemeanor or have it completely
            expunged under Prop 64.
          </AnswerText>
        </QAContainer>
        <QAContainer>
          <QuestionText>
            Q: What type of convictions are eligible to be reclassified to a
            misdemeanor under Prop 47?
          </QuestionText>
          <AnswerText>
            Certain individuals with a low-level non-violent prior felony record
            or who are currently incarcerated may qualify to change their record
            or their sentence to a misdemeanor for the following offenses:
            simple drug possession, petty theft under $950, shoplifting under
            $950, forgery under $950, writting a bad check under $950 or receipt
            of stolen property under $950. However there are some very important
            exceptions and restrictions. Please visit{" "}
            <CourtLink href="https://www.courts.ca.gov/prop47.htm">
              courts.ca.gov/prop47.htm
            </CourtLink>{" "}
            for more information.
          </AnswerText>
        </QAContainer>
        <QAContainer>
          <QuestionText>
            Q: When do I need to file my Prop 47 application?
          </QuestionText>
          <AnswerText>
            You need to file your Prop 47 application by November 4, 2022.
            However, you can still file past that dateline if you have a valid
            excuse. Please visit{" "}
            <CourtLink href="https://www.courts.ca.gov/prop47.htm">
              courts.ca.gov/prop47.htm
            </CourtLink>
            for more information.
          </AnswerText>
        </QAContainer>
        <QAContainer>
          <QuestionText>
            Q: What type of marijuana convictions are eligible under Prop 64?
          </QuestionText>
          <AnswerText>
            There is a long list of mariruana offenses that can be reclassified
            or completely expunged under California’s Prop 64. It includes:
            Possession of one ounce or less of marijuana, possession of
            marijuana for sale. Please visit
            <CourtLink href="https://www.courts.ca.gov/prop64.htm">
              courts.ca.gov/prop64.htm
            </CourtLink>{" "}
            for a complete list and for more information.{" "}
          </AnswerText>
        </QAContainer>
        <QAContainer>
          <QuestionText>
            Q: When do I need to file my Prop 64 application?{" "}
          </QuestionText>
          <AnswerText>
            There is no deadline for filing a Prop 64 application. You may file
            any time.
          </AnswerText>
        </QAContainer>
        <QAContainer>
          <QuestionText>
            Q: Are there any helpful resources for getting my record cleared?{" "}
          </QuestionText>
          <AnswerText>
            There are a lot of organizations that help with record clearance.
            Here is a non-comprehensive list of organizations that provide
            support: NDICA, (list of orgs)
          </AnswerText>
        </QAContainer>
      </QuestionSection>
      <Footer />
    </PageContainer>
  )
}
