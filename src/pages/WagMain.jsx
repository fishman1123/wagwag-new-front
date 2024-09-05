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
import { useRecoilState } from "recoil";
import { newComerAtoms } from "../recoil/userAtoms.jsx";
import { SideBarComponent } from "../styles/SideBar.jsx";
import { FooterComponent } from "../styles/Footer.jsx";
import LocationIcon from "../assets/TopBarIcon/Location.png";
import VideoIcon from "../assets/TopBarIcon/Video.png";
import RankingIcon from "../assets/TopBarIcon/Ranking.png";
import HotIcon from "../assets/TopBarIcon/Hot.png";
import StarIcon from "../assets/TopBarIcon/Star.png";

const BackGroundColor = styled.div`
    position: relative;
    background-color: #080808;
    width: 90vw;
    float: right;
    height: 159.21875vw;
`
const Topbar = styled.div`
    top: 2.9vw;
    display: flex;
    position: absolute;
    width: 79.16vw;
    height: 4.16vw;
    border: 1.5px solid rgba(87, 249, 142, 0.3);
    border-radius: 1vw;
    background-color:rgba(8, 8, 8, 0.8);
    left: 50%;
    transform: translateX(-50%);
`
const LocationIconImg = styled.img.attrs({
    src: LocationIcon,
    alt: "",
})`
    left: 2.55vw;
    position: absolute;
    width: 1.35vw;
    height: 1.35vw;
    top:50%;
    transform: translateY(-50%);
    `;

const VideoIconImg = styled.img.attrs({
    src: VideoIcon,
    alt: "",
})`
    /* left: 20.47vw; */
    position: absolute;
    width: 1.09vw;
    height: 1.09vw;
    top:50%;
    transform: translateY(-50%);
    `;

const RankingIconImg = styled.img.attrs({
    src: RankingIcon,
    alt: "",
})`
    /* left: 35.37vw; */
    position: absolute;
    width: 0.62vw;
    height: 0.78vw;
    top:50%;
    transform: translateY(-50%);
    `;

const HotIconImg = styled.img.attrs({
    src: HotIcon,
    alt: "",
})`
    /* left: 47.71vw; */
    position: absolute;
    width: 0.62vw;
    height: 0.88vw;
    top:50%;
    transform: translateY(-50%);
    `;

const StarIconImg = styled.img.attrs({
    src: StarIcon,
    alt: "",
})`
    /* margin-right: 0.46vw; */
    /* left: 62.97vw; */
    position: absolute;
    width: 0.93vw;
    height: 0.93vw;
    `;

const LocationText = styled.h1`
    margin-right: 15.26vw;
    transform: translateY(-50%);
    top:50%;
    display: flex;
    align-items: center;
    left: 4.32vw;
    position: absolute;
    font-size: 1.14vw;
    color: white;
    text-align: center;
    justify-content: center;
`

const LocationText2 = styled.h2`
    position: absolute;
    font-size: 0.93vw;
    color: white;
    text-align: center;
    justify-content: center;
    margin-left: 1.51vw;
`
const IconTextContainer = styled.div`
    top:50%;
    display: flex;
    align-items: center;
    margin-left: 15.26vw;
`;

const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const CategoryButton = styled.button`
    color: white;
    font-family: 'Pretendard-Medium';
    font-size: 0.98vw;
    position: relative;
    margin-right: 0.83vw;
    width: ${({ isWide }) => (isWide ? '10vw' : '7.34vw')};
    height: 3.22vw;
    border: 1px solid #5E5E5E;
    background-color: #080808;
    border-radius: 10vw;
    top: 87.23vw;

    &:hover {
    cursor: pointer;
    color: #080808;
    background-color: white;
}
`


export const WagMain = () => {
    const [newComerState, setNewComerState] = useRecoilState(newComerAtoms);
    console.log("this is what we have", newComerState);
    return (
        <>
            <BackGroundColor>
                <Topbar>
                    <LocationIconImg></LocationIconImg> <LocationText>서대문구 대현동</LocationText>
                    <IconTextContainer>
                        <VideoIconImg /> <LocationText2>오늘 올라온 영상 갯수</LocationText2>
                    </IconTextContainer>
                    <IconTextContainer>
                        <RankingIconImg /> <LocationText2>우리동네 와글 순위</LocationText2>
                    </IconTextContainer>
                    <IconTextContainer>
                        <HotIconImg /> <LocationText2>우리동네 핫한 키워드</LocationText2>
                    </IconTextContainer>
                    <IconTextContainer>
                        <StarIconImg /> <LocationText2>인기 와글</LocationText2>
                    </IconTextContainer>
                </Topbar>
                <SideBarComponent />
                <CategoryContainer>
                    <CategoryButton>전체</CategoryButton>
                    <CategoryButton>운동</CategoryButton>
                    <CategoryButton>뷰티</CategoryButton>
                    <CategoryButton>일상생활</CategoryButton>
                    <CategoryButton>게임</CategoryButton>
                    <CategoryButton>음식</CategoryButton>
                    <CategoryButton>산책</CategoryButton>
                    <CategoryButton>노래</CategoryButton>
                    <CategoryButton isWide>타 지역 인기 와글</CategoryButton>
                </CategoryContainer>
                <FooterComponent />
            </BackGroundColor>
        </>
    )
}

export default WagMain;
