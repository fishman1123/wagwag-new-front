import profile from "../assets/profile.jpg";
import logoImage from "../assets/wagwagLogo.png";
import UploadIcon from "../assets/UploadIcon.png";
import HomeIcon from "../assets/HomeIcon.png";
import MapIcon from "../assets/MapIcon.png";
import SearchIcon from "../assets/SearchIcon.png";
import SettingIcon from "../assets/SettingIcon.png";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const LogoImg = styled.img.attrs({
    src: logoImage,
    alt: "",
})`
    top: 2.9vw;
    left: 1.3vw;
    position: absolute;
    width: 7.7vw;
    height: 1.3vw;
    `;

const UploadIconImg = styled.img.attrs({
    src: UploadIcon,
    alt: "",
})`
    top: 11.3vw;
    left: 4.3vw;
    position: absolute;
    width: 1.77vw;
    height: 1.77vw;
        &:hover {
        cursor: pointer;
    }
    `;

const HomeIconImg = styled.img.attrs({
    src: HomeIcon,
    alt: "",
})`
    top: 17vw;
    left: 4.3vw;
    position: absolute;
    width: 1.87vw;
    height: 1.7vw;
        &:hover {
        cursor: pointer;
    }
    `;

const MapIconImg = styled.img.attrs({
    src: MapIcon,
    alt: "",
})`
    top: 22.8vw;
    left: 4.3vw;
    position: absolute;
    width: 1.77vw;
    height: 1.92vw;
        &:hover {
        cursor: pointer;
    }
    `;

const SearchIconImg = styled.img.attrs({
    src: SearchIcon,
    alt: "",
})`
    top: 28.7vw;
    left: 4.3vw;
    position: absolute;
    width: 1.77vw;
    height: 1.77vw;
        &:hover {
        cursor: pointer;
    }
    `;

const SettingIconImg = styled.img.attrs({
    src: SettingIcon,
    alt: "",
})`
    top: 34.5vw;
    left: 4.3vw;
    position: absolute;
    width: 1.87vw;
    height: 1.82vw;
        &:hover {
        cursor: pointer;
    }
    `;

const ProfileImage = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 3.95vw;
    width: 2.91vw;
    height: 2.91vw;
    border-radius: 50%;
    background: ${(props) => (props.image ? `url(${props.image})` : "gray")};
    background-size: cover;
    background-position: center;
    &:hover {
        cursor: pointer;
    }
`;

const UserName = styled.h1`
    font-family: 'Pretendard-Medium';
    font-size: 0.93vw;
    position: absolute;
    width: 10vw;
    bottom: 3.95vw;
    text-align: center;
    color: white;
`

const Sidebar = styled.div`
    position: relative;
    width: 10vw;
    height: 100vh;
    background-color: #080808;
    border-right: 1px solid #2B2B2B;
    position: fixed;
    top: 0;
    left: 0;
`;

const BackGroundColor = styled.div`
    position: relative;
    background-color: #080808;
    width: 90vw;
    float: right;
    height: 159.21875vw;
`
const FooterTitle = styled.h2`
    margin-bottom: 1.67vw;
    margin-left: 5.2vw;
    font-family: 'Pretendard-Medium';
    font-size: 0.93vw;
    color: white;
`
const FooterText = styled.h3`
    margin-bottom: 0.57vw;
    font-family: 'Pretendard-Medium';
    font-size: 0.93vw;
    margin-left: 5.2vw;
    color: white;
    display: flex;
    color:#787878;
`
const FooterText2 = styled.h4`
    font-family: 'Pretendard-Medium';
    font-size: 0.93vw;
    margin-left: 5.2vw;
    text-align: center;
    color: white;
    display: flex;
    color:#787878;
`

const FooterTitleContainer = styled.div`
    position: absolute;
    bottom: 3.95vw;
`

const FooterTitleContainer2 = styled.div`
    left: 23vw;
    position: absolute;
    bottom: 3.95vw;
`
const FooterTitleContainer3 = styled.div`
    left: 58.8vw;
    position: absolute;
    bottom: 3.95vw;
`
const RowContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start; /* 각 컨테이너가 위쪽에 정렬되도록 */
`;

const HorizontalLine = styled.hr`
    position: absolute;
    bottom: 9.68vw;
    border: none;
    border-top: 1px solid #2B2B2B;
    margin: 20px 0;
    width: 89%; /* 너비 조정 */
    left: 50%; /* 부모의 가운데 위치로 이동 */
    transform: translateX(-50%); /* 정확히 가운데 정렬 */
`;

export const WagMain = () => {
    return (
        <>
            <BackGroundColor>
                <HorizontalLine />
                <FooterTitleContainer>
                    <FooterTitle>WAGWAG 와그와그</FooterTitle>
                    <FooterText>서울 강남구 선릉로 428 4층</FooterText>
                    <FooterText2>Copyright ©와그와그</FooterText2>
                </FooterTitleContainer>
                <FooterTitleContainer2>
                    <FooterTitle>Member</FooterTitle>
                    <RowContainer>
                        <div>
                            <FooterText>Frontend</FooterText>
                            <FooterText2 style={{ color: '#C1C1C1' }}>조용주, 이지영, 고은진, 윤준수</FooterText2>
                        </div>
                        <div>
                            <FooterText>Backend</FooterText>
                            <FooterText2 style={{ color: '#C1C1C1' }}>진명인, 신재현, 정주현</FooterText2>
                        </div>
                    </RowContainer>
                </FooterTitleContainer2>
                <FooterTitleContainer3>
                    <FooterTitle>문의하기</FooterTitle>
                    <FooterText>wagwagdevelop@naver.com</FooterText>
                    <FooterText2>.</FooterText2>
                </FooterTitleContainer3>
            </BackGroundColor>
            <Sidebar>
                <LogoImg />
                <UploadIconImg />
                <HomeIconImg />
                <MapIconImg />
                <SearchIconImg />
                <SettingIconImg />
                <ProfileImage />
                <UserName>waggle</UserName>
            </Sidebar>
        </>
    )
}

export default WagMain;