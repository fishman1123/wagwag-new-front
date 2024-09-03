// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import settingBg from "../../assets/uploadBack.png";
import styled from 'styled-components';
import logoImage from "../../assets/wagwagLogo.png";
import UploadIcon from "../../assets/UploadIcon.png";
import HomeIcon from "../../assets/HomeIcon.png";
import MapIcon from "../../assets/MapIcon.png";
import SearchIcon from "../../assets/SearchIcon.png";
import SettingIcon from "../../assets/SettingIcon.png";


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

const UserName = styled.h1`
    font-family: 'Pretendard-Medium';
    font-size: 0.93vw;
    position: absolute;
    width: 10vw;
    margin-top: 48vw;
    text-align: center;
    color: white;
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
    margin-top: 46vw;
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






const LoginLayout = () => {

    const SettingBackImages = styled.div` //네이버로고
        width: 100vw;
        height: 100vh;
        background-image: url(${settingBg});
        background-size: cover;       // 이미지를 화면 크기에 맞게 조절
        background-position: center;  // 이미지를 중앙에 위치시킴
        background-repeat: no-repeat; // 이미지가 반복되지 않도록 설정
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;    // 다른 요소들이 이미지 위에 오도록 설정
        margin: 0;
        padding: 0;
    `;


    return (
        <SettingBackImages>
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
            <Outlet />
        </SettingBackImages>
    )
}

export default LoginLayout;