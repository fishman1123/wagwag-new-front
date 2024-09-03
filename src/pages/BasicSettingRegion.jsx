
import { useState, useEffect } from "react";
import logoImage from '../assets/wagwagLogo.png'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const nickname = 'waggle';

const BasicSettingRegion = () => {

    const [selectedRegion, setSelectedRegion] = useState("서울");
    const [selectedTown, setSelectedTown] = useState("강남구");
    const [selectedVillage, setSelectedVillage] = useState("개포동");
    const [userSelection, setUserSelection] = useState([]);
    const navigate = useNavigate();

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
    };

    const handleTownClick = (town) => {
        setSelectedTown(town);
        const firstVillage = regionData
            .find((region) => region.region === selectedRegion)
            .city.find((city) => city.town === town).village[0];
        setSelectedVillage(firstVillage);
        setUserSelection((prevSelection) => [...prevSelection, { region: selectedRegion, town }]);
    };

    const handleVillageClick = (village) => {
        setSelectedVillage(village);
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

//////////////////// 실제 서울 데이터 /////////////////////
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
                town: '강동구',
                village: ['강일동', '고덕동', '길동', '둔촌동', '명일동', '상일동', '성내동', '암사동', '천호동']
            },
            {
                id: 3,
                town: '강북구',
                village: ['미아동', '번동', '수유동', '우이동']
            },
            {
                id: 4,
                town: '강서구',
                village: ['가양동', '개화동', '공항동', '등촌동', '발산동', '방화동', '염창동', '화곡동']
            },
            {
                id: 5,
                town: '관악구',
                village: ['남현동', '봉천동', '신림동']
            },
            {
                id: 6,
                town: '광진구',
                village: ['광장동', '구의동', '군자동', '능동', '자양동', '중곡동', '화양동']
            },
            {
                id: 7,
                town: '구로구',
                village: ['가리봉동', '고척동', '구로동', '개봉동', '오류동', '온수동', '신도림동']
            },
            {
                id: 8,
                town: '금천구',
                village: ['가산동', '독산동', '시흥동']
            },
            {
                id: 9,
                town: '노원구',
                village: ['공릉동', '상계동', '월계동', '중계동', '하계동']
            },
            {
                id: 10,
                town: '도봉구',
                village: ['도봉동', '방학동', '쌍문동', '창동']
            },
            {
                id: 11,
                town: '동대문구',
                village: ['답십리동', '용두동', '이문동', '장안동', '전농동', '제기동', '청량리동', '회기동', '휘경동']
            },
            {
                id: 12,
                town: '동작구',
                village: ['노량진동', '대방동', '동작동', '본동', '상도동', '신대방동', '흑석동']
            },
            {
                id: 13,
                town: '마포구',
                village: ['공덕동', '망원동', '상암동', '서교동', '성산동', '신수동', '연남동', '합정동']
            },
            {
                id: 14,
                town: '서대문구',
                village: ['남가좌동', '북가좌동', '북아현동', '신촌동', '연희동', '충정로']
            },
            {
                id: 15,
                town: '서초구',
                village: ['반포동', '방배동', '서초동', '양재동', '우면동', '잠원동']
            },
            {
                id: 16,
                town: '성동구',
                village: ['금호동', '마장동', '사근동', '성수동', '송정동', '옥수동', '왕십리동', '행당동', '하왕십리동']
            },
            {
                id: 17,
                town: '성북구',
                village: ['길음동', '돈암동', '동선동', '보문동', '삼선동', '석관동', '성북동', '안암동', '월곡동', '장위동', '정릉동']
            },
            {
                id: 18,
                town: '송파구',
                village: ['가락동', '거여동', '마천동', '문정동', '방이동', '삼전동', '석촌동', '송파동', '오금동', '잠실동']
            },
            {
                id: 19,
                town: '양천구',
                village: ['목동', '신월동', '신정동']
            },
            {
                id: 20,
                town: '영등포구',
                village: ['당산동', '대림동', '도림동', '문래동', '신길동', '양평동', '영등포동', '여의도동']
            },
            {
                id: 21,
                town: '용산구',
                village: ['남영동', '보광동', '서빙고동', '용문동', '용산동', '이촌동', '이태원동', '한남동', '후암동']
            },
            {
                id: 22,
                town: '은평구',
                village: ['갈현동', '구산동', '녹번동', '대조동', '불광동', '수색동', '신사동', '역촌동', '응암동', '증산동']
            },
            {
                id: 23,
                town: '종로구',
                village: ['가회동', '견지동', '계동', '누상동', '누하동', '당주동', '돈의동', '동숭동', '명륜동', '묘동', '부암동', '사간동', '사직동', '삼청동', '소격동', '수송동', '숭인동', '신교동', '신영동', '안국동', '연건동', '연지동', '예지동', '옥인동', '원서동', '이화동', '익선동', '인사동', '인의동', '장사동', '재동', '종로1가', '창성동', '청운동', '평창동', '혜화동']
            },
            {
                id: 24,
                town: '중구',
                village: ['광희동', '남대문로', '남산동', '명동', '무교동', '묵정동', '방산동', '봉래동', '서소문동', '소공동', '수표동', '신당동', '쌍림동', '예장동', '오장동', '을지로동', '을지로3가', '을지로6가', '장충동', '중림동', '필동', '황학동', '회현동']
            },
            {
                id: 25,
                town: '중랑구',
                village: ['망우동', '면목동', '묵동', '상봉동', '신내동', '중화동']
            }
        ]
    }
];
