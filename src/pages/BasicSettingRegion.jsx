import settingBg from "../assets/settingBg.png";
import { useState, useEffect } from "react";
import logoImage from '../assets/wagwagLogo.png'
import styled from "styled-components";

const nickname = '와글와글';

const BasicSettingRegion = () => {

    const [selectedProvince, setSelectedProvince] = useState("서울");
    const [selectedTown, setSelectedTown] = useState("강남구");
    const [selectedVillage, setSelectedVillage] = useState("개포동");
    const [userSelection, setUserSelection] = useState([]);

    useEffect(() => {
        const initialProvince = regionData.find(region => region.region === "서울");
        const initialTown = initialProvince.city[0].town;
        setSelectedTown(initialTown);
    }, []);

    const handleProvinceClick = (province) => {
        setSelectedProvince(province);
        const firstTown = regionData.find(region => region.region === province).city[0].town;
        setSelectedTown(firstTown);
        setSelectedVillage(null);
    };

    const handleTownClick = (town) => {
        setSelectedTown(town);
        const firstVillage = regionData
            .find((region) => region.region === selectedProvince)
            .city.find((city) => city.town === town).village[0];
        setSelectedVillage(firstVillage);
        setUserSelection((prevSelection) => [...prevSelection, { province: selectedProvince, town }]);
    };

    const handleVillageClick = (village) => {
        setSelectedVillage(village);
    };

    
    return (
        <>
            <Wrapper>
                <LogoImg/>
                <SettingTitle><NickName>{nickname}</NickName>님의 지역을 설정해주세요</SettingTitle>
                <SettingSubTitle>* 내 지역을 기반으로 와글을 볼 수 있어요</SettingSubTitle>
                <RegionSelect>
                    <CitySelect>
                        <AdministrativeText>시 · 도</AdministrativeText>
                            {regionData.map((region) => (
                                <CityItem
                                    key={region.region}
                                    onClick={() => handleProvinceClick(region.region)}
                                    selected={selectedProvince === region.region}
                                >
                                    {region.region}
                                </CityItem>
                            ))}
                    </CitySelect>

                    <TownSelect>
                        <AdministrativeText>구 · 군 · 시</AdministrativeText>
                        <ItemList>
                            {selectedProvince && regionData
                                .find((region) => region.region === selectedProvince)
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
                                .find((region) => region.region === selectedProvince)
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
                <PageIndicator/>
                <DoneButton>완료</DoneButton>
            </Wrapper>
        </>
    );
};

export default BasicSettingRegion;

// Styled components
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
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const LogoImg = styled.img.attrs({
    src: logoImage,
    alt: "",
})`
    position: absolute;
    top: 3.4vw;
    left: 3.5vw;
    width: 9.2vw;
    height: 1.5vw;
`;

const SettingTitle = styled.p`
    text-align: center;
    color: white;
    font-size: 1.3vw;
    top: 12vw;
    margin: 0;
    padding: 0;
`;

const SettingSubTitle = styled.p`
    text-align: center;
    color: #898989;
    font-size: 1vw;
    margin: 0.7vw 0 0 0;
`;

const NickName = styled.span`
    color: #57F98E;
`

const RegionSelect = styled.div`
    display: flex;
    flex-direction: row;
    margin: 4vw 0 0 0;
    width: 75vw;
`;

const CitySelect = styled.div`
    flex: 5vw;
    display: flex;
    flex-direction: column;
    border-right: solid 1.5px #898989;
`;

const TownSelect = styled.div`
    flex: 31vw;
    display: flex;
    flex-direction: column;
    height: 18.4vw;
    margin-left: 2.8vw;
`;

const VillageSelect = styled.div`
    flex: 31vw;
    display: flex;
    flex-direction: column;
    height: 18.4vw;
    margin-left: 2.8vw;
`;

const CityItem = styled.div`
    width: auto;
    color: ${({ selected }) => (selected ? '#57F98E' : 'white')};
    margin: 0.9vw 0;
    padding: 0;
    font-size: 1.4vw;
    text-align: left;
    cursor: pointer;
`;

const TownItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.8vw;
    height: 3.2vw;
    color: ${({ selected }) => (selected ? '#57F98E' : 'white')};
    border: solid ${({ selected }) => (selected ? '#57F98E' : 'transparent')};
    border-radius: 50vh;
    font-size: 1.2vw;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
`;

const VillageItem = styled.div`
    display: flex;
    justify-content: left;
    width: 7vw;
    color: ${({ selected }) => (selected ? '#57F98E' : 'white')};
    margin: 0.7vw 0 0.7vw 1.8vw;
    font-size: 1.1vw;
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
`;

const AdministrativeText = styled.p`
    display: block;
    color: #898989;
    font-size: 1vw;
`;

const PageIndicator = styled.div`
    
`;

const DoneButton = styled.button`
    background-color: #FFF;
    color: black;
    border-radius: 0.7vw;
    border: none;
    font-size: 1vw;
    margin-top: 6.5vh;
    padding: 1vw 2.6vw;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    
    &:hover {
        background-color: #DDD;
    }

    &:disabled {
        background-color: #898989;
        cursor: default;
    }
`;

//////////////////// dummy data /////////////////////
const regionData = [
    {
        region: "서울",
        city: [
            {
                id: 1,
                town: "강남구",
                village: ["개포동", "논현동", "대치동", "도곡동", "삼성동", "세곡동", "수서동", "신사동", "압구정동", "역삼동", "일원동", "자곡동", "청담동"]
            },
            {
                id: 2,
                town: '강북구',
                village: ['수유1동', '우이동', '인수동', '번동', '미아동']
            },
            {
                id: 3,
                town: '서대문구',
                village: ['신촌동', '연희동', '북아현동', '홍제동', '충정로']
            },
            {
                id: 4,
                town: '종로구',
                village: ['삼청동', '청운동', '평창동', '혜화동']
            },
            {
                id: 5,
                town: '마포구',
                village: ['합정동', '서교동', '망원동', '도화동', '공덕동']
            },
            {
                id: 6,
                town: '용산구',
                village: ['이태원동', '한남동', '동빙고동', '용산2가동', '이촌동']
            },
            {
                id: 7,
                town: '중구',
                village: ['광희동', '회현동', '필동', '신당동', '을지로동']
            },
            {
                id: 8,
                town: '동대문구',
                village: ['휘경동', '이문동', '전농동', '제기동', '용두동']
            },
            {
                id: 9,
                town: '성북구',
                village: ['성북동', '삼선동', '돈암동', '안암동', '종암동']
            },
            {
                id: 10,
                town: '강서구',
                village: ['염창동', '등촌동', '화곡동', '가양동', '방화동']
            },
            {
                id: 11,
                town: '송파구',
                village: ['잠실동', '풍납동', '문정동', '가락동', '방이동']
            },
            {
                id: 12,
                town: '영등포구',
                village: ['여의도동', '영등포동', '당산동', '문래동', '양평동']
            },
            {
                id: 13,
                town: '구로구',
                village: ['신도림동', '구로동', '고척동', '개봉동', '오류동']
            },
            {
                id: 14,
                town: '노원구',
                village: ['상계동', '월계동', '하계동', '중계동', '공릉동']
            },
            {
                id: 15,
                town: '양천구',
                village: ['신월동', '신정동', '목동', '양천동', '금호동']
            }
        ]
    }
];
