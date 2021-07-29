import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavContainer = styled.div`
    width: 100%;
    border: 3px solid blue;
    height: 3em;
    display: flex;
`;

const LogoContainer = styled.div`
    width: 50%;
    border: 3px solid green;
`;

const LinksContainer = styled.div`
    width: 50%;
    border: 3px solid teal;
    display: flex;
    padding-top: .5em;
`;

const StyledLink = styled(Link)`
    &&&& {
        margin:3px;
    }
`;


export default function Nav() {
    return (
        <NavContainer>
            <LogoContainer>Logo</LogoContainer>
            <LinksContainer>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/faq">FAQ</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </LinksContainer>
        </NavContainer>
    )
}