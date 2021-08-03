import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
`

export default function Footer() {
    return (
        <FooterContainer>
            I am the Footer
        </FooterContainer>
    )
}