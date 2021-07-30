import React from "react";
import Nav from "../components/Nav";

import styled from "styled-components";

const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid red;
`;

const HelpSection = styled.div`
    width: 100%;
    border: 2px solid brown;
    min-height: 30%;
    background-color: #FFFAF2;
    display: flex;
`;

const TextContainer = styled.div`
    width: 50%;
`;

const ImageContainer = styled.div`
    width: 50%;
`;

export default function FAQ() {
    return (
        <PageContainer>
            <Nav />
            <HelpSection>
                <TextContainer>
                    <h2>Frequently Asked Questions:</h2>
                    <h3>How can we help you?</h3>

                </TextContainer>
                <ImageContainer>
                    Image
                </ImageContainer>
            </HelpSection>
        </PageContainer>
    )
}