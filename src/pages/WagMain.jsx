import profile from "../assets/profile.jpg";
import logoImage from "../assets/wagwagLogo.png";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const LogoImg = styled.img.attrs({
    src: logoImage,
    alt: "",
})`
    top: 2.9vw;
    left: 1.34vw;
    position: absolute;
    width: 7.7vw;
    height: 1.3vw;
    `;

const BackGroundColor = styled.div`
    background-color: #080808;
    width: 100vw;
    height: 100vh;
`


const Sidebar = styled.div`
    width: 10vw;
    height: 100vh;
    background-color: #080808;
    border-right: 1px solid #2B2B2B;
    position: fixed;
    top: 0;  
    left: 0;
`;

export const WagMain = () => {
    return (
        <>
            <BackGroundColor />
            <Sidebar />
            <LogoImg />
        </>
    )
}

export default WagMain;