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


const BackGroundColor = styled.div`
    position: relative;
    background-color: #080808;
    width: 90vw;
    float: right;
    height: 159.21875vw;
`

export const WagMain = () => {
    const [newComerState, setNewComerState] = useRecoilState(newComerAtoms);
    console.log("this is what we have", newComerState);
    return (
        <>
            <BackGroundColor>
                <SideBarComponent />
                <FooterComponent />
            </BackGroundColor>
        </>
    )
}

export default WagMain;
