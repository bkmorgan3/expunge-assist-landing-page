import React from "react";
import styled from "styled-components";
import "@fontsource/mulish"

const ProfileContainer = styled.div`
    width: 400px;
    /* border: 2px solid red; */
`

const Image = styled.img`
    width: 250px;
    height: 175px;
    /* border: 1px solid red; */
    margin-left: 40px;
    border-radius: 50%;
`

const TeamMemberText = styled.p`
    font-size: 1.5em;
    font-family: "mulish";
`

export default function Profile({name, title, image}) {
    return (
        <ProfileContainer>
                <Image src={image} alt="Team member photo" />
                <TeamMemberText>{name}</TeamMemberText>
                <TeamMemberText>{title}</TeamMemberText>
        </ProfileContainer>
    )
}