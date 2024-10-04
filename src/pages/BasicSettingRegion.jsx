
import { useState, useEffect } from "react";
import logoImage from '../assets/wagwagLogo.png'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import {useRecoilState} from "recoil";
import {newComerAtoms} from "../recoil/userAtoms.jsx";
import regionData from "../regionData.json";


const BasicSettingRegion = () => {
    const [selectedRegion, setSelectedRegion] = useState("서울");
    const [selectedTown, setSelectedTown] = useState("강남구");
    const [selectedVillage, setSelectedVillage] = useState("개포동");
    const navigate = useNavigate();
    const [newComerState, setNewComerState] = useRecoilState(newComerAtoms);
    const nickname = newComerState.userNickName;

    useEffect(() => {
        const initialRegion = regionData.find(region => region.region === "서울");
        const initialTown = initialRegion.city[0].town;
        setSelectedTown(initialTown);
    }, []);

    const handleRegionClick = (region) => {
        setSelectedRegion(region);
        const firstTown = regionData.find(item => item.region === region).city[0].town;
        setSelectedTown(firstTown);
        setSelectedVillage(null);


        setNewComerState((prevState) => ({
            ...prevState,
            userRegion: [{ city: region, town: firstTown, village: null }],
        }));
    };

    const handleTownClick = (town) => {
        setSelectedTown(town);
        const firstVillage = regionData
            .find((region) => region.region === selectedRegion)
            .city.find((city) => city.town === town).village[0];
        setSelectedVillage(firstVillage);


        setNewComerState((prevState) => ({
            ...prevState,
            userRegion: [{ city: selectedRegion, town, village: firstVillage }],
        }));
    };

    const handleVillageClick = (village) => {
        setSelectedVillage(village);


        setNewComerState((prevState) => ({
            ...prevState,
            userRegion: [{ city: selectedRegion, town: selectedTown, village }],
        }));
    };

    const handleSaveButtonClick = () => {
        navigate('/basic/category');
    };

    return (
        <>
            <Wrapper>
                <LogoImg />
                <SettingTitle>{nickname}님의 지역을 설정해주세요</SettingTitle>
                <SettingSubTitle><ColorText>* 내 지역</ColorText>을 기반으로 와글을 볼 수 있어요</SettingSubTitle>
                <RegionSelect>
                    <CitySelect>
                        <AdministrativeText>시 · 도</AdministrativeText>
                        {regionData.map((region) => (
                            <CityItem
                                key={region.region}
                                onClick={() => handleRegionClick(region.region)}
                                selected={selectedRegion === region.region}
                            >
                                {region.region}
                            </CityItem>
                        ))}
                    </CitySelect>

                    <TownSelect>
                        <AdministrativeText>구 · 군 · 시</AdministrativeText>
                        <ItemList>
                            {selectedRegion && regionData
                                .find((region) => region.region === selectedRegion)
                                .city.map((city) => (
                                    <TownItem
                                        key={city.id}
                                        onClick={() => handleTownClick(city.town)}
                                        selected={selectedTown === city.town}
                                    >
                                        {city.town}
                                    </TownItem>
                                ))}
                        </ItemList>
                    </TownSelect>

                    <VillageSelect>
                        <AdministrativeText>동 · 읍 · 면</AdministrativeText>
                        <ItemList>
                            {selectedTown && regionData
                                .find((region) => region.region === selectedRegion)
                                .city.find((city) => city.town === selectedTown)
                                .village.map((village) => (
                                    <VillageItem
                                        key={village}
                                        onClick={() => handleVillageClick(village)}
                                        selected={selectedVillage === village}
                                    >
                                        {village}
                                        {selectedVillage === village && <CheckIcon />}
                                    </VillageItem>
                                ))}
                        </ItemList>
                    </VillageSelect>
                </RegionSelect>
                <SaveButton onClick={handleSaveButtonClick}>확인</SaveButton>
                <NavWrapper>
                    <NavItem />
                    <NavItem style={{ backgroundColor: '#D9D9D9' }} />
                    <NavItem />
                </NavWrapper>
            </Wrapper>
        </>
    );
};

export default BasicSettingRegion;

// 스타일 컴포넌트
const CheckIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.4vw" viewBox="0 0 24 24" fill="rgba(34, 197, 94, 1)">
            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
        </svg>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LogoImg = styled.img.attrs({
    src: logoImage,
    alt: "",
})`
    top: 3.4vw;
    left: 3.6vw;
    position: absolute;
    width: 9.2vw;
    height: 1.5vw;
  `;

const SettingTitle = styled.h1`
    font-family: "Pretendard-Medium";
    position: absolute;
    text-align: center;
    color: white;
    font-size: 1.35vw;
    top: 12vw;
`;

const SettingSubTitle = styled.p`
    font-family: "Pretendard-Medium";
    position: absolute;
    text-align: center;
    color: #898989;
    font-size: 1vw;
    top: 14.2vw;
`;

const ColorText = styled.span`
    color: #57F98E;
`

const RegionSelect = styled.div`
    position: absolute;
    top: 20vw;
    display: flex;
    flex-direction: row;
    width: 75vw;
`;

const CitySelect = styled.div`
    font-family: "Pretendard-Medium";
    flex: 4.8vw;
    display: flex;
    flex-direction: column;
    border-right: solid 1px #2B2B2B;
`;

const TownSelect = styled.div`
    font-family: "Pretendard-Medium";
    flex: 31vw;
    display: flex;
    flex-direction: column;
    height: 18.4vw;
    margin-left: 2.8vw;
`;

const VillageSelect = styled.div`
    font-family: "Pretendard-Medium";
    flex: 31vw;
    display: flex;
    flex-direction: column;
    height: 18.4vw;
    margin-left: 2.8vw;
`;

const CityItem = styled.div`
    font-family: "Pretendard-Medium";
    width: auto;
    color: white;
    margin: 0.9vw 0;
    padding: 0;
    font-size: 1.3vw;
    justify-self: center;
    cursor: pointer;
`;

const TownItem = styled.div`
    font-family: "Pretendard-Medium";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.82vw;
    height: 3.22vw;
    color: ${({ selected }) => (selected ? '#57F98E' : 'white')};
    border: solid ${({ selected }) => (selected ? '#57F98E' : 'transparent')};
    border-radius: 50vh;
    font-size: 1.2vw;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
`;

const VillageItem = styled.div`
    font-family: "Pretendard-Medium";
    display: flex;
    justify-content: left;
    align-items: center;
    width: 7.5vw;
    height: 3.53vw;
    color: ${({ selected }) => (selected ? '#57F98E' : 'white')};
    margin: 0 0 0 1.8vw;
    font-size: 1.2vw;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
`;

const ItemList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1vw;
    width: 100%;
    overflow-y: auto;
    max-height: 18.4vw;

    &::-webkit-scrollbar {
        width: 0.31vw;
    }

  &::-webkit-scrollbar-thumb {
        background-color: #898989;
        border-radius: 0.4vw;
    }

  &::-webkit-scrollbar-track {
        background-color: #2B2B2B;
        border-radius: 0.4vw;
    }
`;

const AdministrativeText = styled.p`
    display: block;
    color: #898989;
    font-size: 1vw;
    margin-bottom: 1.3vw;
    font-family: "Pretendard-Medium";
`;

const SaveButton = styled.button`
  position: absolute;
  top: 43.4vw;
  width: 7vw;
  height: 3.4vw;
  background-color: rgba(255, 255, 255, 0.8);
  color: #080808;
  font-family: "Pretendard-Medium";
  border-radius: 0.8vw;
  border: 1px solid #787878;
  transition: 0.5s ease;
  text-align: center;
  font-size: 1.14vw;
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
    top: 50vw;
`;

const NavItem = styled.div`
    width: 2.4vw;
    padding: 0.1vw;
    display: flex;
    margin: 0.5vw;
    background: ${(props) => (props.active ? "#D9D9D9" : "#474747")};
    justify-content: space-around;
    border-radius: 5px;
`;
