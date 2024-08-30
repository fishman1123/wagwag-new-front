import settingBg from "../assets/aaa.png";
import profile from "../assets/profile.jpg";
import logoImage from '../assets/wagwagLogo.png';
import { useEffect, useState } from "react";
import styled from 'styled-components';

const LogoImg = styled.img.attrs({ // 로고 이미지
    src: logoImage,
    alt: "",
})`
    top: 3.4vw;
    left: 3.6vw;
    position: absolute;
    width: 9.2vw;
    height: 1.5vw;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SettingTitle = styled.h1` // 세팅 타이틀
    font-family: 'Pretendard-Medium';
    position: absolute;
    text-align: center;
    color: white;
    font-size: 1.35vw;
    top: 12vw;
`;

const SettingsmallTitle = styled.h2` // 세팅 설명 타이틀
    font-family: 'Pretendard-Medium';
    position: absolute;
    text-align: center;
    color: white;
    font-size: 1vw;
    top: 35.4vw;
`;

const ColorText = styled.span`  // 세팅 설명 타이틀 컬러변경
    color: #57F98E; /* 와그와그 포인트컬러로 설정 */
`;

const SaveButton = styled.button`
    width: 7vw;
    height: 3.4vw;
    margin-top: 43.4vw;
    background-color: rgba(255, 255, 255, 0.8);
    color: #080808;
    font-family: 'Pretendard-Medium';
    border-radius: 0.8vw;
    border: 1px solid #787878;
    transition: 0.5s ease;
    text-align: center;
    font-size: 1.14vw;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;

    &:hover {
        border: 1px solid white;
        color: #080808;
        background-color: white;
        transition: 0.5s ease;
    }
`;

const NavWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-around; /* 가로 정렬을 위한 설정 */
    align-items: center;
`;

const NavItem = styled.div`
    position: relative;
    width: 2.4vw;
    padding: 0.1vw;
    text-align: center;
    display: flex;
    padding: 0.1vw;
    margin: 0.5vw;
    background: ${(props) => (props.active ? '#D9D9D9' : '#474747')};
    justify-content: space-around;
    border-radius: 5px;
    top: 50vw;
`;

const NickName = () => {
    return (
        <div>
            <LogoImg />
            <Wrapper>
                <SettingTitle>닉네임을 설정해 주세요</SettingTitle>
                <SettingsmallTitle><ColorText>* 사용가능</ColorText>한 닉네임입니다</SettingsmallTitle>
                <SaveButton>확인</SaveButton>
                <NavWrapper>
                    <NavItem /><NavItem /><NavItem />
                </NavWrapper>
            </Wrapper>
        </div>
    );
};

export default NickName;
