import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.jpg";
import markerIcon from "../assets/Icon/markerIcon.png";

// 로그인한 계정 데이터
const userProfileData = {
    id: 1,
    profileImg: profile,
    nickName: "waggle",
    email: "LGU+frontend@gmail.com",
    region: "서대문구 대현동",
    registerDate: "2024.08.11",
  };

const UserProfile = (props) => {
    return (
        <>
            <Wrapper>
                <ProfileImage img={userProfileData.profileImg}></ProfileImage>
                <NickName>{userProfileData.nickName}</NickName>
                <Email>{userProfileData.email}</Email>
                <Hr></Hr>
                <MarkerIcon img={markerIcon}></MarkerIcon>
                <Region>{userProfileData.region}</Region>
                <RegisterDate>{userProfileData.registerDate}</RegisterDate>
            </Wrapper>
        </>
    );
}

export default UserProfile;


// style component
const Wrapper = styled.div`
    margin-top: 11.3vw;
    margin-bottom: 8.2vw;
    width: 21.7vw;
    height: 31.4vw;
    border: 1.5px #898989 solid;
    border-radius: 1.2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const ProfileImage = styled.div`
    width: 5.8vw;
    height: 5.8vw;
    border-radius: 50%;
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: contain;
    margin-top: 3.7vw;
`;

const NickName = styled.p`
    color: white;
    font-size: 1.35vw;
    margin-top: 0.9vw;
`;

const Email = styled.p`
    color: #898989;
    font-size: 0.9vw;
    margin-top: 1.9vw;
`;

const Hr = styled.div`
    background-color: #2b2b2b;
    width: 16vw;
    height: 0.08vw;
    margin-top: 1.6vw;
`;

const MarkerIcon = styled.div`
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 2.2vw;
    width: 1.14vw;
    height: 1.45vw;
`;

const Region = styled.p`
    color: #57F98E;
    font-size: 1.3vw;
    margin-top: 1.4vw;
`;

const RegisterDate = styled.p`
    color: #898989;
    font-size: 0.9vw;
    margin-top: 4.6vw;
`;
